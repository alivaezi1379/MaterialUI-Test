import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { ChartsTooltip } from "@mui/x-charts";

import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";

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
function LineChartBox({ heading, number, content }) {
  return (
    <div>
      {" "}
      <Box
        sx={{
          border: "1px solid #212732",
          borderRadius: "16px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          width: "392px",
        }}
      >
        <h3> Users</h3>
        <p>14K</p>
        <p>Last 30 days</p>
        <ChartContainer
          width={300}
          height={100}
          disableAxisListener={true}
          disablePadding
          disableMargin
          series={[{ type: "line", data: pData }]}
          yAxis={[
            {
              hideTooltip: false,
              label: "Value",
              min: 0,
              tickPlacement: "middle",
              tickNumber: 9,
              tickMaxStep: 9,
              tickMinStep: 1,
            },
          ]}
          xAxis={[
            {
              scaleType: "point",
              data: xLabels,
              tickMinStep: 1,

              hideTooltip: false,
              tickSize: 1,
              tickNumber: 1,
            },
          ]}
          sx={{
            [`& .${lineElementClasses.root}`]: {
              stroke: "#8884d8",
              strokeWidth: 2,
            },
            [`& .${markElementClasses.root}`]: {
              stroke: "#8884d8",
              scale: "0.6",

              fill: "#ffffff",
              strokeWidth: 2,
            },
          }}
        >
          <ChartsTooltip />
          <LinePlot tooltip={{ trigger: "item" }} />
          <MarkPlot />
        </ChartContainer>
      </Box>
    </div>
  );
}

export default LineChartBox;
