import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarQuickFilter,
  jaJP,
} from '@mui/x-data-grid';
import '../table/projectTable.scss';
import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { AddButton } from '../button';
import AddClient from '../dialog/AddClient';

type Props = {
  columns: GridColDef[];
  rows: object[];
  label: string;
}

const ClientTable = (props: Props) => {
  const { columns, rows, label } = props;
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);

  const actionColumn: GridColDef[] = [
    {
      field: 'edit',
      headerName: '編集',
      width: 50,
      renderCell: () => {
        return (
          <div onClick={() => console.log('Clicked!')}>
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
      renderCell: () => {
        return (
          <div onClick={() => console.log('Clicked!')}>
            <Tooltip title='削除'>
              <IconButton>
                <DeleteIcon color='error' />
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
        <AddButton action={handleOpen} />
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
      {dialogOpen && (
        <AddClient
          open={dialogOpen}
          onClose={handleClose}
          label={label}
          onRegister={function (value: T): void {
            throw new Error('Function not implemented.');
          }}
        />
      )}
    </div>
  );
};

export default ClientTable