import React from "react";

const ExpenseChart = () => {
    const expenses = [
        { month: "Aug", value: 60 },
        { month: "Sep", value: 90 },
        { month: "Oct", value: 50 },
        { month: "Nov", value: 30 },
        { month: "Dec", value: 120, highlight: true },
        { month: "Jan", value: 70 },
    ];

    return (
        <div className="h-[225px] w-[350px] bg-white rounded-xl p-4 shadow-md">
            
            <div className="flex items-end gap-3 h-[150px]">
                {expenses.map((exp, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div
                            className={`w-8 rounded-md transition-all ${exp.highlight
                                    ? "bg-teal-400 h-[120px] text-black font-bold"
                                    : "bg-gray-300 h-[" + exp.value + "px]"
                                }`}
                        ></div>
                        <span className="text-sm text-gray-500">{exp.month}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpenseChart;
