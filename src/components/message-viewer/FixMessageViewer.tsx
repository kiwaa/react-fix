import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Chip from '@mui/material/Chip';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowModel } from '@mui/x-data-grid';
import { FixMessage } from "../../models/FixMessage/FixMessage";

type FixMessageViewerProps = {
    value: FixMessage
};

function FixMessageViewer({ value }: FixMessageViewerProps) {
    const [hideHeaderTrailer, setHideHeaderTrailer] = React.useState<boolean>(true);

    const columns: GridColDef[] = [
        { field: 'tag', headerName: 'Tag', width: 50 },
        {
            field: 'name',
            headerName: 'Field Name',
            width: 150,
            renderCell: (params: GridRenderCellParams<String>) => (
                <Chip label={params.value} color={"primary"} size="small" />
            ),
        },
        { field: 'value', headerName: 'Value', width: 150 },
        { field: 'valueName', headerName: 'Value Name', width: 150 },
    ];

    const handleHideHeaderTrailer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHideHeaderTrailer(event.target.checked);
    }

    return (
        <>
            <FormGroup>
                <FormControlLabel control={<Switch onChange={handleHideHeaderTrailer} checked={hideHeaderTrailer} />} label="Hide Header and Trailer?" />
            </FormGroup>

            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={Array.isArray(value.data) ? value.data.filter(x => !hideHeaderTrailer ? true : !(x.header || x.trailer)) : []}
                    columns={columns}
                    rowHeight={32}
                    hideFooter={true}
                />
            </div>
        </>
    );
}

export default FixMessageViewer;
