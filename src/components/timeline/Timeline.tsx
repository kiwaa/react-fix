import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Chip from '@mui/material/Chip';
import { DataGrid, GridColDef, GridRowSelectionModel, GridCallbackDetails, GridRenderCellParams } from '@mui/x-data-grid';
import { FixMessage } from "../../models/FixMessage/FixMessage";

type TimelineProps = {
    values: FixMessage[],
    onSelected: (selected: FixMessage) => void;
};

function Timeline({ values = [], onSelected }: TimelineProps) {
    const [hideAdmin, setHideAdmin] = React.useState<boolean>(true);

    const columns: GridColDef[] = [
        {
            field: 'time',
            headerName: 'Time',
            headerClassName: 'x-db-header',
            width: 150
        },
        { field: 'senderCompId', headerName: 'Sender', headerClassName: 'x-db-header', minWidth: 90 },
        { field: 'targetCompId', headerName: 'Target', headerClassName: 'x-db-header', minWidth: 90 },
        {
            field: 'msgType',
            headerName: 'Message Type',
            headerClassName: 'x-db-header',
            width: 150,
            renderCell: (params: GridRenderCellParams<String>) => (
                <Chip label={params.value} color="primary" size="small" />
            ),
        },
        { field: 'clOrdId', headerName: 'ClOrdId', headerClassName: 'x-db-header', width: 150 },
        // { field: 'detail', headerName: 'Message Type', width: 150 },
    ];

    const handleHideAdminChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHideAdmin(event.target.checked);
    }

    const handleRowSelectionModelChange = (rowSelectionModel: GridRowSelectionModel, details: GridCallbackDetails<any>) => {
        let selected = rowSelectionModel.map(x => values.find(y => y.id === x)).filter(x => x) as FixMessage[];
        if (selected && selected.length > 0) {
            onSelected(selected[0]);
        }
    }

    return (
        <>
            <FormGroup>
                <FormControlLabel control={<Switch onChange={handleHideAdminChange} checked={hideAdmin} />} label="Hide Admin messages?" />
            </FormGroup>

            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={Array.isArray(values) ? values.filter(x => !hideAdmin ? true : !x.isAdmin) : []}
                    columns={columns}
                    onRowSelectionModelChange={handleRowSelectionModelChange}
                    hideFooter={true}
                    rowHeight={32}
                    getRowClassName={(params) =>
                        params.indexRelativeToCurrentPage % 2 === 0 ? 'x-dg-row-even' : 'x-dg-row-odd'
                    }
                />
            </div>
        </>
    );
}

export default Timeline;

