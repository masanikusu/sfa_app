// import { useState } from "react"
import { Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { DataTable } from '../../components';


const Support = () => {
  // const columns: GridColDef[] = [
  //   { field: 'id', headerName: 'ID', width: 60 },
  //   {
  //     field: 'client',
  //     headerName: '顧客名',
  //     width: 250,
  //     sortable: false,
  //     type: 'string',
  //   },
  //   {
  //     field: 'project',
  //     headerName: '案件名',
  //     width: 350,
  //     sortable: false,
  //     type: 'string',
  //   },
  //   {
  //     field: 'accuracy',
  //     headerName: '確度',
  //     width: 60,
  //     sortable: false,
  //     type: 'string',
  //   },
  //   {
  //     field: 'expectedOrderDate',
  //     headerName: '受注予定日',
  //     width: 130,
  //     sortable: false,
  //     type: 'string',
  //   },
  //   {
  //     field: 'negotiator',
  //     headerName: '商談担当者',
  //     width: 130,
  //     sortable: false,
  //     type: 'string',
  //   },
  //   {
  //     field: 'totalCost',
  //     headerName: '合計費用',
  //     width: 130,
  //     sortable: false,
  //     type: 'number',
  //   },
  // ];
  return (
    <>
      <div className='clients'>
        <Typography variant='subtitle1' gutterBottom>
          顧客情報
        </Typography>
        {/* <DataTable columns={columns} rows={} /> */}
      </div>
    </>
  )
}

export default Support