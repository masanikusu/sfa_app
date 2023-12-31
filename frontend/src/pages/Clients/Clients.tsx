import { Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { clientData } from '../../data';
import './Clients.scss';
import { ClientTable } from '../../components/table';

const Clients = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
      field: 'client',
      headerName: '顧客名',
      width: 150,
      sortable: false,
      type: 'string',
    },
    {
      field: 'department',
      headerName: '部署名',
      width: 150,
      sortable: false,
      type: 'string',
    },
    {
      field: 'pic',
      headerName: '担当者',
      width: 120,
      sortable: false,
      type: 'string',
    },
    {
      field: 'tel',
      headerName: 'TEL',
      width: 130,
      sortable: false,
      type: 'string',
    },
    {
      field: 'email',
      headerName: 'メールアドレス',
      width: 170,
      sortable: false,
      type: 'string',
    },
    {
      field: 'zip',
      headerName: '郵便番号',
      width: 100,
      sortable: false,
      type: 'string',
    },
    {
      field: 'address',
      headerName: '住所',
      width: 250,
      sortable: false,
      type: 'string',
    },
  ];

  return (
    <>
      <div className='clients'>
        <Typography variant='h6' gutterBottom>
          顧客情報
        </Typography>
        <ClientTable columns={columns} rows={clientData} label='顧客'/>
      </div>
    </>
  );
};

export default Clients;
