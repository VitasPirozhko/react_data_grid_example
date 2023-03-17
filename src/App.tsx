import { Select, SelectChangeEvent } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, useGridApiContext } from '@mui/x-data-grid';
import 'App.css'

function App() {
  
  return (
    <div style={{ height: 500, width: '100%' }} className="data_grid_wrap">
      <DataGrid
        rows={rowData}
        columns={addGeneralProperties(columnDefs)}
        sx={{
          boxShadow: '-2px 2px 8px rgba(78,69,92,.08)',
          borderRadius: '20px',
        }}
      />
  </div>
  );
}

export default App;

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
    field: 'field_1',
    headerName: 'TAX ID',
    headerAlign: 'center',
    editable: false,
  },
  { field: 'field_2', headerName: "", },
  { field: 'field_3', headerName: "Internal sub#", type: 'date', width: 130, },
  { field: 'field_4', headerName: "Status", },
  {
    field: 'field_5',
    headerName: 'Finance status for paying bulk',
    renderEditCell: SelectEditInputCell,
    width: 180,
  },
  { field: 'field_6', headerName: "NAME", width: 160 },
  { field: 'field_7', headerName: "ALL NAMEs", width: 160 },
  { field: 'field_8', headerName: "Comment", },
  { field: 'field_9', headerName: "Лінк на Екземпляр Глово/статус", width: 300 },
  { field: 'field_10', headerName: "Екземпляр Партнерастатус", },
  { field: 'field_11', headerName: "Літера в архіві", },
  { field: 'field_12', headerName: "Номер в архіві", },
  { field: 'field_13', headerName: "City", },
  { field: 'field_14', headerName: "Найменування", },
  { field: 'field_15', headerName: "TAX ID", },
  { field: 'field_16', headerName: "Active as of 15.01.2023", },
  { field: 'field_17', headerName: "IBAN/ Bank account", },
  { field: 'field_18', headerName: "IBAN check", },
  { field: 'field_19', headerName: "Yes Updated", },
  { field: 'field_20', headerName: "Comment on commission", },
  { field: 'field_21', headerName: "trial", },
  { field: 'field_22', headerName: "Platform\nfee\nплата за доступ до додатку\nСУМА", },
  { field: 'field_23', headerName: "Platform\nfee\nплата за доступ до додатку\nЗВІТНИЙ ПЕРІОД", },
  { field: 'field_24', headerName: "Activation\nfee (incl VAT)\nплата за активацію", },
  { field: 'field_25', headerName: "Paper / electronic version", },
  { field: 'field_26', headerName: "Agreement name", },
  { field: 'field_27', headerName: "Agreement/additional agreement date", },
  { field: 'field_28', headerName: "Type", },
  { field: 'field_29', headerName: "Payment type", },
  { field: 'field_30', headerName: "Повна/скорочена/ marketplace/інформаційні", },
  { field: 'field_31', headerName: "Інший пункт про проведення промо-акцій", },
  { field: 'field_32', headerName: "ДУ про PROMO - пункти що взагалі допускають проведення промо-акції", },
  { field: 'field_33', headerName: "ДУ про зниж на дост - пункти, що стосуються конкретно знижки на доставку", },
  { field: 'field_34', headerName: "Дата ДУ на всі ПРОМО\nself promo\\ 1+1, DF\nССП-1", },
  { field: 'field_35', headerName: "Статус \n\"ДУ на всі ПРОМО\nself promo\\ 1+1\"", },
  { field: 'field_36', headerName: "Коментар \n\"ДУ на всі ПРОМО\nself promo\\ 1+1\"", },
  { field: 'field_37', headerName: "Промо без Додатку ДАТА", },
  { field: 'field_38', headerName: "Промо без Додатку ЛІНК", },
  { field: 'field_39', headerName: "Промо без Додатку СТАТУС", },
  { field: 'field_40', headerName: "count", },
  { field: 'field_41', headerName: "Lost agreements request", },
  { field: 'field_42', headerName: "Invoicing", },
  { field: 'field_43', headerName: "AA on weekly invoicing link", },
  { field: 'field_44', headerName: "AA on weekly invoicing status", },
  { field: 'field_45', headerName: "Payment terms", },
  { field: 'field_46', headerName: "Дата останнього гарантійного листа", },
]

export const rowData: GridRowsProp = [
  {
      id: 1,
      field_1: 3319819095,
      field_2: 10364,
      field_3: new Date(),
      field_4: "ok",
      field_5: "To pay",
      field_6: " Lavash-Shashlik",
      field_7: " Lavash-Shashlik",
      field_8: null,
      field_9: {
        value: 'https://vchasno.ua/app/documents/83441e0f-32b0-4da9-bd26-8f39c79ed724?folder_id=6008&conditions2=60017002&conditions2=60017003120&conditions2=60017004&conditions2=60017007220&conditions2=600270010&conditions2=60027003020&conditions2=60027007120&conditions2=60027007010&conditions2=60077001&conditions2=60077003&conditions2=600070102221',
        href: 'https://vchasno.ua/app/documents/83441e0f-32b0-4da9-bd26-8f39c79ed724?folder_id=6008&conditions2=60017002&conditions2=60017003120&conditions2=60017004&conditions2=60017007220&conditions2=600270010&conditions2=60027003020&conditions2=60027007120&conditions2=60027007010&conditions2=60077001&conditions2=60077003&conditions2=600070102221'
      },
      field_10: null,
      field_11: null,
      field_12: null,
      field_13: "м. Дніпро",
      field_14: "ФОП ІМЕРЛІШВІЛІ ГІОРГІ",
      field_15: 3319819095,
      field_16: "10364-01",
      field_17: "UA413052990000026005050346079",
      field_18: "ok",
      field_19: null,
      field_20: "31%+VAT",
      field_21: null,
      field_22: null,
      field_23: null,
      field_24: "99+VAT",
      field_25: "electronic",
      field_26: "Договір про надання послуг",
      field_27: "15.02.2022",
      field_28: "agency",
      field_29: "Total orders",
      field_30: "Cкорочена",
      field_31: null,
      field_32: null,
      field_33: null,
      field_34: null,
      field_35: null,
      field_36: null,
      field_37: null,
      field_38: null,
      field_39: null,
      field_40: 3,
      field_41: null,
      field_42: "Bi-weekly",
      field_43: null,
      field_44: null,
      field_45: "Bi-weekly",
      field_46: null
  },
  {
      id: 2,
      field_1: 3482908834,
      field_2: 10589,
      field_3: new Date(),
      field_4: "not signed",
      field_5: "DO NOT PAY",
      field_6: " Pub_belfast2.0",
      field_7: " Pub_belfast2.0",
      field_8: null,
      field_9: {
        value: 'https://vchasno.ua/app/documents/1830bd23-5813-4386-98d5-486a2c0a6528?folder_id=6008&conditions2=60017002&conditions2=60017003120&conditions2=60017004&conditions2=60017007220&conditions2=600270010&conditions2=60027003020&conditions2=60027007120&conditions2=60027007010&conditions2=60077001&conditions2=60077003&conditions2=600070102221',
        href: 'https://vchasno.ua/app/documents/1830bd23-5813-4386-98d5-486a2c0a6528?folder_id=6008&conditions2=60017002&conditions2=60017003120&conditions2=60017004&conditions2=60017007220&conditions2=600270010&conditions2=60027003020&conditions2=60027007120&conditions2=60027007010&conditions2=60077001&conditions2=60077003&conditions2=600070102221'
      },
      field_10: null,
      field_11: null,
      field_12: null,
      field_13: "м. Ужгород",
      field_14: "ФОП ЧЕРЕВКО СТАНІСЛАВ ВАДИМОВИЧ",
      field_15: 3482908834,
      field_16: "Not active",
      field_17: "UA703123560000026004506475113",
      field_18: "ok",
      field_19: null,
      field_20: "30%+VAT ",
      field_21: null,
      field_22: null,
      field_23: null,
      field_24: "99+VAT",
      field_25: "electronic",
      field_26: "Договір про надання послуг",
      field_27: "12.04.2022",
      field_28: "agency",
      field_29: "Total orders",
      field_30: "Cкорочена",
      field_31: null,
      field_32: null,
      field_33: null,
      field_34: null,
      field_35: null,
      field_36: null,
      field_37: null,
      field_38: null,
      field_39: null,
      field_40: 1,
      field_41: null,
      field_42: "Bi-weekly",
      field_43: null,
      field_44: null,
      field_45: "Bi-weekly",
      field_46: null
  },
  {
      id: 3,
      field_1: 2987809576,
      field_2: 2165,
      field_3: new Date(),
      field_4: "ok",
      field_5: "To pay",
      field_6: "_Sma4na_Shaurma_",
      field_7: "_Sma4na_Shaurma_",
      field_8: null,
      field_9: {
        value: 'https://vchasno.ua/app/documents/92cb8fa0-4697-4613-a02f-d77ed3d748ab?folder_id=6008&q_search=2987809576&page=3',
        href: 'https://vchasno.ua/app/documents/92cb8fa0-4697-4613-a02f-d77ed3d748ab?folder_id=6008&q_search=2987809576&page=3'
      },
      field_10: null,
      field_11: null,
      field_12: null,
      field_13: "Київ (правий берег)",
      field_14: "ФОП БЄЛУГІН ІВАН ОЛЕКСІЙОВИЧ",
      field_15: 2987809576,
      field_16: "Not active",
      field_17: "UA163003460000026008093470401",
      field_18: "ok",
      field_19: null,
      field_20: "35%+VAT",
      field_21: null,
      field_22: null,
      field_23: null,
      field_24: 1000,
      field_25: "electronic",
      field_26: "Договір про надання послуг",
      field_27: "26.06.2020",
      field_28: "agency",
      field_29: "Total orders",
      field_30: "Cкорочена",
      field_31: null,
      field_32: "пункти в самому Договорі",
      field_33: null,
      field_34: "30.06.2021",
      field_35: null,
      field_36: null,
      field_37: null,
      field_38: null,
      field_39: null,
      field_40: 1,
      field_41: null,
      field_42: "Bi-weekly",
      field_43: null,
      field_44: null,
      field_45: "Bi-weekly",
      field_46: null
  }
]