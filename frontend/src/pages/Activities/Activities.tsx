import { GridColDef } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import { DataTable } from '../../components';
import { activityHistory } from '../../data';
import './activities.scss';

const Activities = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
      field: 'supportDate',
      headerName: '対応日時',
      width: 120,
      sortable: false,
      type: 'string',
    },
    {
      field: 'supporter',
      headerName: '対応者',
      width: 120,
      sortable: false,
      type: 'string',
    },
    {
      field: 'project',
      headerName: '案件名',
      width: 240,
      sortable: false,
      type: 'string',
    },
    {
      field: 'correspondence',
      headerName: '対応内容',
      width: 130,
      sortable: false,
      type: 'string',
    },
    {
      field: 'note',
      headerName: '商談メモ',
      width: 300,
      sortable: false,
      type: 'string',
    },
  ];
  return (
    <div className='activities'>
      <Typography variant='h6' gutterBottom>
        活動履歴
      </Typography>
      {/* <DataTable columns={columns} rows={activityHistory} label='活動履歴'/> */}
    </div>
  );
};

export default Activities;
