// import { useState } from "react"
import { GridColDef } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import './projects.scss';
import { DataTable } from '../../components';
import { projectData } from '../../data';

const Projects = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
      field: 'client',
      headerName: '顧客名',
      width: 250,
      sortable: false,
      type: 'string',
    },
    {
      field: 'project',
      headerName: '案件名',
      width: 350,
      sortable: false,
      type: 'string',
    },
    {
      field: 'accuracy',
      headerName: '確度',
      width: 60,
      sortable: false,
      type: 'string',
    },
    {
      field: 'expectedOrderDate',
      headerName: '受注予定日',
      width: 130,
      sortable: false,
      type: 'string',
    },
    {
      field: 'negotiator',
      headerName: '商談担当者',
      width: 130,
      sortable: false,
      type: 'string',
    },
    {
      field: 'totalCost',
      headerName: '合計費用',
      width: 130,
      sortable: false,
      type: 'number',
    },
  ];
  // const [open, setOpen] = useState(false);

  return (
    <>
      <div className='projects'>
        <Typography variant='subtitle1' gutterBottom>
          案件情報
        </Typography>
        <DataTable columns={columns} rows={projectData} />
      </div>
    </>
  );
};

export default Projects;
