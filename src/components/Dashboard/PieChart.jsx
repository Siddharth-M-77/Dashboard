import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
        datasets: [
            {
                label: "Expenses Breakdown",
                data: [30, 15, 20, 35], // Percentages
                backgroundColor: ["#2D3748", "#ED8936", "#D53F8C", "#3B82F6"], // Custom colors
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: "bottom",
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="flex justify-center items-center  bg-gray-100">
            <div className="h-[322px] bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-lg font-semibold text-center mb-4">
                    Expenses Breakdown
                </h2>
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default PieChart;
