import { Stack, Typography } from '@mui/material';
import { AddButton } from '../../components/button';
import { DataTable } from '../../components';
import { GridColDef } from '@mui/x-data-grid';
import { clientData } from '../../data';
// import './Clients.scss'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'client', headerName: '顧客名', width: 150, sortable: false, type: 'string' },
  { field: 'department', headerName: '部署名', width: 180, sortable: false, type: 'string' },
  { field: 'pic', headerName: '担当者', width: 130, sortable: false, type: 'string' },
  { field: 'tel', headerName: 'TEL', width: 130, sortable: false, type: 'string' },
  { field: 'email', headerName: 'メールアドレス', width: 170, sortable: false, type: 'string' },
  { field: 'zip', headerName: '郵便番号', width: 100, sortable: false, type: 'string' },
  { field: 'address', headerName: '住所', width: 280, sortable: false, type: 'string' },
];

const Clients = () => {

  return (
    <>
      <div className='clients'>
        <Stack direction='row' spacing={2}>
          {/* <h1 className='info'>顧客情報</h1> */}
          <Typography variant='subtitle1' gutterBottom>顧客情報</Typography>
          <AddButton />
        </Stack>
        <DataTable columns={columns} rows={clientData}/>
      </div>
    </>
  );
};

export default Clients;
