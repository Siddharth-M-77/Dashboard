import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement);

const BalanceHistory = () => {
    const data = {
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
        datasets: [
            {
                label: "Balance",
                data: [200, 400, 300, 800, 500, 200, 600],
                borderColor: "#1814F3", // Line color
                backgroundColor: "rgba(24, 20, 243, 0.2)",
                fill: true,
                tension: 0.4,
                pointRadius: 3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide legend
            },
        },
        scales: {
            x: {
                grid: {
                    display: true,
                    drawBorder: false,
                },
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: false,
                },
                ticks: {
                    stepSize: 200, // Adjust based on your data
                },
            },
        },
    };

    return (
        <div className="flex flex-col w-[635px] justify-between h-[323px] p-4  ">
            <h2 className="text-xl te text-color xt-start mb-2 font-semibold text-gray-800 ">Balance History</h2>
            <div className="h-[276px] bg-white shadow-2xl rounded-2xl p-4">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default BalanceHistory;
