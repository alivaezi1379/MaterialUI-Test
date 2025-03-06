import React from 'react';
import Box from "@mui/material/Box";
import {LineChart} from "@mui/x-charts/LineChart";
import {dataset} from "./GDPperCapita.js";

function LineChartLeft(props) {
    return (
        <div>

            <Box
                sx={{
                    border: "1px solid #212732",
                    borderRadius: "16px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent:"start",
                    alignItems:"start",
                    width: "100%",
                }}
            >
                <h2>LifeStyle</h2>
                <p>13.3M Viewers</p>
                <p>page views and published for the last 6 months</p>
                <LineChart
                    dataset={dataset}
                    grid={{horizontal: true}}
                    tooltip={
                        {
                            classes: {
                                paper: "tooltip-container"
                            } ,
                        }}
                    slots={{
                        legend: "none",

                    }}

                    series={[
                        {
                            id: "France",
                            label: "French GDP per capita",
                            dataKey: "fr",
                            stack: "total",
                            area: true,
                            color:"#0059b3",
                            showMark: false,
                        },
                        {
                            id: "Germany",
                            label: "German GDP per capita",
                            dataKey: "dl",
                            stack: "total",
                            area: true,
                            showMark: false,
                            color: "#027AF2"
                        },
                        {
                            id: "United Kingdom",
                            label: "UK GDP per capita",
                            dataKey: "gb",
                            stack: "total",
                            area: true,
                            color:'#0059B3',
                            showMark: false,
                        },
                    ]}
                    width={765}
                    height={250}


                    margin={{ left:55 }}
                />
            </Box>

        </div>
    );
}

export default LineChartLeft;