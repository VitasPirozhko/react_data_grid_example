import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { mockData, mockHeadData } from './mock';

function App() {

  return (
    <>
      <div className="ag-theme-alpine" style={{height: 400, width: '100%'}}>
        <AgGridReact
            rowData={mockData}
            columnDefs={mockHeadData}>
        </AgGridReact>
      </div>
    </>
  );
}

export default App;
