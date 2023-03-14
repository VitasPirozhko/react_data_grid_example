import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import CSVReader from "react-csv-reader";
import { useState } from 'react';


const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};

function App() {
  const [rows, setRows] = useState([]);

  const handleForce = (data, fileInfo) => {
    setRows(data)
  };

  const columns = Object.keys(rows[0] || {}).map((key) => {
    return {
      key,
      name: key
    }
  })
  console.log(rows);
  return (
    <>
      <div style={{marginBottom: "50px"}}>
        <CSVReader
          onFileLoaded={handleForce}
          parserOptions={papaparseOptions}
        />
      </div>
      <div>
        <DataGrid columns={columns} rows={rows} />;
      </div>
    </>
  );
}

export default App;
