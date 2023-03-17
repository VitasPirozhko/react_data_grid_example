import { Select, SelectChangeEvent } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, useGridApiContext } from '@mui/x-data-grid';
import 'App.css'
import { useState } from 'react';

function App() {
  const [files, setFiles] = useState([]);
  return (
    <>
      <Upload setFiles={setFiles} />
      <div style={{ height: '83vh', width: '100%' }} className="data_grid_wrap">
        <DataGrid
          rows={files}
          columns={addGeneralProperties(columnDefs)}
          sx={{
            boxShadow: '-2px 2px 8px rgba(78,69,92,.08)',
            borderRadius: '20px',
          }}
        />
    </div>
    </>
  );
}

export default App;

const Upload: React.FC<{setFiles: any}> = ({ setFiles }) => {

  const handleChange = (e: any) => {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = e => {
        if (e.target !== null) {
          setFiles(addID(JSON.parse((e.target as any).result)));
        }
      };
  };
  return (
    <>
      <h1>Upload Json file</h1>
      <input type="file" onChange={handleChange} />
    </>
  );
}

const SelectEditInputCell = (props: GridRenderCellParams) => {
  const { id, value, field } = props;
  const apiRef = useGridApiContext();

  const handleChange = async (event: SelectChangeEvent) => {
    await apiRef.current.setEditCellValue({ id, field, value: event.target.value });
    apiRef.current.stopCellEditMode({ id, field });
  };

  return (
    <Select
      className='selectWrap'
      value={value}
      onChange={handleChange}
      size="small"
      sx={{ 
        height: 1,
        width: '100%',
        border: 'none',
        borderRadius: 0
      }}
      native
      autoFocus
    >
      <option>To pay</option>
      <option>DO NOT PAY</option>
    </Select>
  );
}

const addGeneralProperties = (collumns: GridColDef[]) => collumns.map((coll) => {
  return {
    editable: true,
    headerClassName: 'table_row_header',
    cellClassName: () => 'table_cell',
    renderCell: (params: GridRenderCellParams) => {
      const { value } = params;
      
      if (!value) return value;
      if (!value.href) return value.value;
      return <a href={value.href} target="_blank" rel="noreferrer" >{value.value}</a>
    },
    ...coll,
  }
});

const columnDefs: GridColDef[] = [
  {
    field: '1',
    headerName: 'TAX ID',
    headerAlign: 'center',
    editable: false,
  },
  { field: '2', headerName: "", },
  { field: '3', headerName: "Internal sub#", type: 'date', width: 130, },
  { field: '4', headerName: "Status", },
  {
    field: '5',
    headerName: 'Finance status for paying bulk',
    renderEditCell: SelectEditInputCell,
    width: 180,
  },
  { field: '6', headerName: "NAME", width: 160 },
  { field: '7', headerName: "ALL NAMEs", width: 160 },
  { field: '8', headerName: "Comment", },
  { field: '9', headerName: "Лінк на Екземпляр Глово/статус", width: 300 },
  { field: '10', headerName: "Екземпляр Партнерастатус", },
  { field: '11', headerName: "Літера в архіві", },
  { field: '12', headerName: "Номер в архіві", },
  { field: '13', headerName: "City", },
  { field: '14', headerName: "Найменування", },
  { field: '15', headerName: "TAX ID", },
  { field: '16', headerName: "Active as of 15.01.2023", },
  { field: '17', headerName: "IBAN/ Bank account", },
  { field: '18', headerName: "IBAN check", },
  { field: '19', headerName: "Yes Updated", },
  { field: '20', headerName: "Comment on commission", },
  { field: '21', headerName: "trial", },
  { field: '22', headerName: "Platform\nfee\nплата за доступ до додатку\nСУМА", },
  { field: '23', headerName: "Platform\nfee\nплата за доступ до додатку\nЗВІТНИЙ ПЕРІОД", },
  { field: '24', headerName: "Activation\nfee (incl VAT)\nплата за активацію", },
  { field: '25', headerName: "Paper / electronic version", },
  { field: '26', headerName: "Agreement name", },
  { field: '27', headerName: "Agreement/additional agreement date", },
  { field: '28', headerName: "Type", },
  { field: '29', headerName: "Payment type", },
  { field: '30', headerName: "Повна/скорочена/ marketplace/інформаційні", },
  { field: '31', headerName: "Інший пункт про проведення промо-акцій", },
  { field: '32', headerName: "ДУ про PROMO - пункти що взагалі допускають проведення промо-акції", },
  { field: '33', headerName: "ДУ про зниж на дост - пункти, що стосуються конкретно знижки на доставку", },
  { field: '34', headerName: "Дата ДУ на всі ПРОМО\nself promo\\ 1+1, DF\nССП-1", },
  { field: '35', headerName: "Статус \n\"ДУ на всі ПРОМО\nself promo\\ 1+1\"", },
  { field: '36', headerName: "Коментар \n\"ДУ на всі ПРОМО\nself promo\\ 1+1\"", },
  { field: '37', headerName: "Промо без Додатку ДАТА", },
  { field: '38', headerName: "Промо без Додатку ЛІНК", },
  { field: '39', headerName: "Промо без Додатку СТАТУС", },
  { field: '40', headerName: "count", },
  { field: '41', headerName: "Lost agreements request", },
  { field: '42', headerName: "Invoicing", },
  { field: '43', headerName: "AA on weekly invoicing link", },
  { field: '44', headerName: "AA on weekly invoicing status", },
  { field: '45', headerName: "Payment terms", },
  { field: '46', headerName: "Дата останнього гарантійного листа", },
]

// export const rowData = {
//       id: 1,
//       field_1: 3319819095,
//       field_2: 10364,
//       field_3: new Date(),
//       field_4: "ok",
//       field_5: "To pay",
//       field_6: " Lavash-Shashlik",
//       field_7: " Lavash-Shashlik",
//       field_8: null,
//       field_9: {
//         value: 'https://vchasno.ua/app/documents/83441e0f-32b0-4da9-bd26-8f39c79ed724?folder_id=6008&conditions2=60017002&conditions2=60017003120&conditions2=60017004&conditions2=60017007220&conditions2=600270010&conditions2=60027003020&conditions2=60027007120&conditions2=60027007010&conditions2=60077001&conditions2=60077003&conditions2=600070102221',
//         href: 'https://vchasno.ua/app/documents/83441e0f-32b0-4da9-bd26-8f39c79ed724?folder_id=6008&conditions2=60017002&conditions2=60017003120&conditions2=60017004&conditions2=60017007220&conditions2=600270010&conditions2=60027003020&conditions2=60027007120&conditions2=60027007010&conditions2=60077001&conditions2=60077003&conditions2=600070102221'
//       },
//       field_10: null,
//       field_11: null,
//       field_12: null,
//       field_13: "м. Дніпро",
//       field_14: "ФОП ІМЕРЛІШВІЛІ ГІОРГІ",
//       field_15: 3319819095,
//       field_16: "10364-01",
//       field_17: "UA413052990000026005050346079",
//       field_18: "ok",
//       field_19: null,
//       field_20: "31%+VAT",
//       field_21: null,
//       field_22: null,
//       field_23: null,
//       field_24: "99+VAT",
//       field_25: "electronic",
//       field_26: "Договір про надання послуг",
//       field_27: "15.02.2022",
//       field_28: "agency",
//       field_29: "Total orders",
//       field_30: "Cкорочена",
//       field_31: null,
//       field_32: null,
//       field_33: null,
//       field_34: null,
//       field_35: null,
//       field_36: null,
//       field_37: null,
//       field_38: null,
//       field_39: null,
//       field_40: 3,
//       field_41: null,
//       field_42: "Bi-weekly",
//       field_43: null,
//       field_44: null,
//       field_45: "Bi-weekly",
//       field_46: null
// }

// const addRows = (): GridRowsProp => {
//   let multiRow: any = [];
//   for (let i = 0; i < 10000; ++i) {
//     multiRow.push({
//       ...rowData,
//       id: i,
//       ...(i === 502 && {field_1: 11111111})
//     })
//   }
//   return multiRow;
// }

const addID = (rows: []) => rows.map((row: {}, index) => {
  return {
    ...row,
    id: index,
    3: new Date(),
  }
})