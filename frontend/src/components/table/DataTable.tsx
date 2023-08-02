import { DataGrid, GridColDef } from '@mui/x-data-grid';
import '../table/dataTable.scss'

type Props = {
  columns: GridColDef[];
  rows: object[];
  // slug: string;
}

const DataTable = (props: Props) => {
  const { columns, rows } = props;

  return (
    <div style={{ height: 650, width: '100%', backgroundColor: 'white' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
