// import * as React from "react";


// export type DataTableProps<Data extends object> = {
//     data: Data[];
//     columns: ColumnDef<Data, any>[];
//     onSelectionChanged?: (selected: Data) => void;
// };

// function DataTable<Data extends object>({
//     data,
//     columns,
//     onSelectionChanged
// }: DataTableProps<Data>) {
//     const [rowSelection, setSelected] = React.useState<RowSelectionState>({});

//     const selectionChange = (row: Updater<RowSelectionState>) => {
//         if (setSelected)
//             setSelected(row);
//         if (onSelectionChanged)
//             onSelectionChanged(table.getSelectedRowModel().rows.map(x => x.original)[0]);
//     }

//     const table = useReactTable({
//         columns,
//         data,
//         getCoreRowModel: getCoreRowModel(),
//         onRowSelectionChange: selectionChange,
//         enableRowSelection: true,
//         enableMultiRowSelection: false,
//         state: {
//             rowSelection
//         }
//     });

//     return (
//         <Table variant="striped" size='sm'>
//             <Thead>
//                 {table.getHeaderGroups().map((headerGroup) => (
//                     <Tr key={headerGroup.id}>
//                         {headerGroup.headers.map((header) => {
//                             // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
//                             const meta: any = header.column.columnDef.meta;
//                             return (
//                                 <Th
//                                     key={header.id}
//                                     onClick={header.column.getToggleSortingHandler()}
//                                     isNumeric={meta?.isNumeric}
//                                 >
//                                     {flexRender(
//                                         header.column.columnDef.header,
//                                         header.getContext()
//                                     )}
//                                 </Th>
//                             );
//                         })}
//                     </Tr>
//                 ))}
//             </Thead>
//             <Tbody>
//                 {table.getRowModel().rows.map((row) => {
//                     return (
//                         <Tr key={row.id}
//                             background={row.getIsSelected() ? 'selected.row.background' : 'notselected.row.background'}
//                             onClick={row.getToggleSelectedHandler()}>
//                             {row.getVisibleCells().map((cell) => {
//                                 return (
//                                     <Td key={cell.id} p={1}>
//                                         {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                                     </Td>
//                                 );
//                             })}
//                         </Tr>
//                     );
//                 })}
//             </Tbody>
//         </Table >
//     );
// }

// export default DataTable;
export default function DataTable() {
}
