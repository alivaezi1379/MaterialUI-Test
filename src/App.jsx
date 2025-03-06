import { useState, React } from "react";
import Sidebar from "./Sidebar";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import InboxIcon from "@mui/icons-material/Inbox";
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';
import DraftsIcon from "@mui/icons-material/Drafts";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Divider from "@mui/material/Divider";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import { styled, alpha } from "@mui/material/styles";
import { dataset } from "./GDPperCapita";
import { LineChart } from "@mui/x-charts/LineChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack";
import { BarChart } from "@mui/x-charts/BarChart";
import { legendClasses } from "@mui/x-charts/ChartsLegend";
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";
import "./App.css";
import { ChartsTooltip } from "@mui/x-charts";
import { LegendPerItem } from "@mui/x-charts/ChartsLegend/LegendPerItem";
import { DataGrid } from "@mui/x-data-grid";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import LineChartBox from "./LineChartBox";
import LineChartLeft from "./LineChartLeft.jsx";

import { colors } from "@mui/material";
import lineChartLeft from "./LineChartLeft.jsx";
import BarChartRight from "./BarChartRight.jsx";
import PieChart from "./PieChart.jsx";

const MUI_X_PRODUCTS = [
  {
    id: "grid",
    label: "Data Grid",
    children: [
      { id: "grid-community", label: "@mui/x-data-grid" },
      { id: "grid-pro", label: "@mui/x-data-grid-pro" },
      { id: "grid-premium", label: "@mui/x-data-grid-premium" },
    ],
  },
  {
    id: "pickers",
    label: "Date and Time Pickers",
    children: [
      { id: "pickers-community", label: "@mui/x-date-pickers" },
      { id: "pickers-pro", label: "@mui/x-date-pickers-pro" },
    ],
  },
  {
    id: "charts",
    label: "Charts",
    children: [{ id: "charts-community", label: "@mui/x-charts" }],
  },
  {
    id: "tree-view",
    label: "Tree View",
    children: [{ id: "tree-view-community", label: "@mui/x-tree-view" }],
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function App() {
  const [count, setCount] = useState(0);


  const pData = [5, 6, 4, 5, 7, 4, 5];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  const customLegend = () => {
    return <div></div>;
  };

  return (
    <div className="app">
      <Sidebar />

      <div className="main-contents">
        <div className="line-charts">
          <LineChartBox />
          <LineChartBox />
          <LineChartBox />
          <LineChartBox />
        </div> 
        <div className="second-charts">

          <LineChartLeft />
          <BarChartRight />

        </div>
        <div className="table-tree-con">
          <div className="table-sec">
            {" "}
            <Box
              sx={{
                width: "100%",
                border: "1px solid #212732",
                borderRadius:"4px !important",
                outline: "none",
              }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                sx={{
                  border: "none",
                  backgroundColor:"#101318",
                  borderRadius: "4px !important",
                  color:"white",
                }}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 8,
                    },
                  },
                }}
                pageSizeOptions={[8]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </div>
          <div className="treeView">
            <Box
              sx={{
                minHeight: 352,
                width: "100%",
                minWidth: "395px",
                display: "table-cell",
                border: "1px solid #212732",
                borderRadius: "16px",
                height: "auto",
                overflow: "hidden",
                color: "white",
              }}
            >
              <RichTreeView
                items={MUI_X_PRODUCTS}

                sx={{ height: "auto", overflow: "hidden" }}
              />
            </Box>
            <Box sx={{ color:"#fff !important", fill:"#fff" }} >
              <PieChart />
            </Box>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
