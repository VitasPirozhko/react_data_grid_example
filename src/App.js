import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
// import CSVReader from "react-csv-reader";
// import { useState } from 'react';
import { mockData, mockHeadData } from './mock';

// const papaparseOptions = {
//   header: true,
//   dynamicTyping: true,
//   skipEmptyLines: true,
//   transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
// };

function App() {
  // const [rows, setRows] = useState([]);

  // const handleForce = (data, fileInfo) => {
  //   setRows(data)
  // };

  // const columns = Object.keys(mockData[0] || {}).map((key) => {
  //   return {
  //     key,
  //     name: key
  //   }
  // })

  return (
    <>
      {/* <div style={{marginBottom: "50px"}}>
        <CSVReader
          onFileLoaded={handleForce}
          parserOptions={papaparseOptions}
        />
      </div> */}
      <div>
        <DataGrid columns={mockHeadData} rows={mockData} />;
      </div>
    </>
  );
}

export default App;
