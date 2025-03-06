import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {BarChart} from "@mui/x-charts/BarChart";
import {chartsGridClasses} from "@mui/x-charts/ChartsGrid";
import {legendClasses} from "@mui/x-charts/ChartsLegend";

function BarChartRight(props) {

    const [xHighlight, setXHightlight] = useState("band");
    const [yHighlight, setYHightlight] = useState("none");

    const handleChange = (direction) => (event) => {
        if (direction === "x") {
            setXHightlight(event.target.value);
        }
        if (direction === "y") {
            setYHightlight(event.target.value);
        }
    };


    const barChartsParams = {
        xAxis: [
            {
                data: ["page A", "page B", "page C", "page D", "page E"],
                scaleType: "band",
            },
        ],
        series: [
            { data: [2, 5, 3, 4, 1], stack: "1", label: "Series x" },
            { data: [10, 3, 1, 2, 10], stack: "1", label: "Series y" },
            { data: [10, 3, 1, 2, 10], stack: "1", label: "Series z" },
        ],
        margin: { top: 10, right: 10 },
        sx: {
            [`& .${legendClasses.root}`]: {
                display: "none",
            },
        },
        height: 300,
    };



    return (
        <div>


            <Box
                sx={{
                    border: "1px solid #212732",
                    borderRadius: "16px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    width: "100%",
                }}
            >
                <h2>Booboo</h2>
                <p>13.3M Viewers</p>
                <p>page views and published for the last 6 months</p>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    sx={{ width: "100%", m: 2 }}
                >
                    <div style={{ flexGrow: 1 }}>
                        <BarChart
                            grid={{horizontal:true}}
                            {...barChartsParams}
                            axisHighlight={{ x: xHighlight, y: yHighlight }}
                            colors={["#1968B7" , "#1C88F3" , "#5EAFFF"]}
                            borderRadius={16}
                            sx={{
                                [`& .${chartsGridClasses.line}`]: { strokeDasharray: '5 3', strokeWidth: 2, color:"#fff" },}}
                            width={765}
                            height={250}
                            slots={{
                                legend:"none"
                            }}
                        />
                    </div>
                    <Stack
                        direction={{ xs: "row", md: "column" }}
                        justifyContent={{ xs: "space-around", md: "flex-start" }}
                        spacing={2}
                        sx={{ m: 2 }}
                    ></Stack>
                </Stack>
            </Box>
        </div>
    );
}

export default BarChartRight;