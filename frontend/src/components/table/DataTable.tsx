import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarQuickFilter,
  jaJP,
} from '@mui/x-data-grid';
import '../table/dataTable.scss';
// import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { AddButton } from '../button';

type Props = {
  columns: GridColDef[];
  rows: object[];
};

const DataTable = (props: Props) => {
  const { columns, rows } = props;
  // const [dialogOpen, setDialogOpen] = useState(false);
  // const [selected, setSelected] = useState(false);

  const handle = () => console.log('###');
  // const handleOpen = () => setDialogOpen(true);
  // const handleEdit = () => {
  //   setSelected(true);
  // };
  const handleDelete = (id: number) => {
    console.log(id);
    // setSelected(true);
  };

  const actionColumn: GridColDef[] = [
    {
      field: 'edit',
      headerName: '編集',
      width: 50,
      renderCell: (params) => {
        return (
          <div onClick={() => handleDelete(params.row.id)}>
            <Tooltip title='編集'>
              <IconButton>
                <EditIcon color='success' />
              </IconButton>
            </Tooltip>
          </div>
        );
      },
    },
    {
      field: 'delete',
      headerName: '削除',
      width: 50,
      renderCell: (params) => {
        return (
          <div onClick={() => handleDelete(params.row.id)}>
            <Tooltip title='削除'>
              <IconButton>
                <DeleteIcon color='error'/>
              </IconButton>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer sx={{ p: 3 }}>
        <GridToolbarQuickFilter />
        <AddButton action={handle} />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  };

  return (
    <div className='data-grid'>
      <DataGrid
        rows={rows}
        columns={[...columns, ...actionColumn]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        onRowSelectionModelChange={() => {}}
        slots={{ toolbar: CustomToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
  );
};

export default DataTable;
