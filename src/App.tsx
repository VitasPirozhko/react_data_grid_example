import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import React from 'react';
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomUpdatedDate,
// } from '@mui/x-data-grid-generator';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 180, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', editable: true },
  {
    field: 'dateCreated',
    headerName: 'Date Created',
    type: 'date',
    width: 180,
    editable: true,
  },
];

const rows: GridRowsProp = [
  {
    id: 1,
    name: 'test1',
    age: 25,
    dateCreated: new Date(),
  },
  {
    id: 2,
    name: 'test2',
    age: 36,
    dateCreated: new Date(),
  },
  {
    id: 3,
    name: 'test3',
    age: 19,
    dateCreated: new Date(),
  },
];

function App() {

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
  </div>
  );
}

export default App;
