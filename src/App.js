import { AgGridReact } from 'ag-grid-react';
import { useMemo } from 'react';

import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { rowData, columnDefs } from './mock';

function App() {

  const defaultColDef = useMemo(() => {
    return {
      resizable: true,
      editable: true,
    };
  }, []);

  return (
    <>
      <div className="ag-theme-alpine" style={{height: 700, width: '100%'}}>
        <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          >
        </AgGridReact>
      </div>
    </>
  );
}

export default App;
