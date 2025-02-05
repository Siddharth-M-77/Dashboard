import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const InvestmentGraph = ({ dynamicTitle }) => {
  const [state, setState] = useState({
    series: [
      {
        name: "Investment Growth",
        data: [10, 50, 35, 51, 49, 62],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: dynamicTitle, 
        align: "left",
        fontSize: 22,
        
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
      },
    },
  });

  return (
    <div className="bg-white shadow-xl p-4 rounded-lg">
      <ReactApexChart 
        options={state.options} 
        series={state.series} 
        type="line" 
        height={282} 
        width={540} 
      />
    </div>
  );
};

export default InvestmentGraph;
