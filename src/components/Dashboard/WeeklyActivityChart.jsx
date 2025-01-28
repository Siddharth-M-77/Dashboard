import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { day: "Sat", Deposit: 200, Withdraw: 500 },
  { day: "Sun", Deposit: 300, Withdraw: 400 },
  { day: "Mon", Deposit: 200, Withdraw: 300 },
  { day: "Tue", Deposit: 400, Withdraw: 500 },
  { day: "Wed", Deposit: 100, Withdraw: 200 },
  { day: "Thu", Deposit: 300, Withdraw: 500 },
  { day: "Fri", Deposit: 300, Withdraw: 400 },
];

const WeeklyActivityChart = () => {
  return (
    <div className="w-[730px] h-[322px] p-4 bg-white rounded-lg shadow-md">
    
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Deposit" fill="#0ea5e9" radius={[10, 10, 0, 0]} />
        <Bar dataKey="Withdraw" fill="#3b82f6" radius={[10, 10, 0, 0]} />
      </BarChart>
    </div>
  );
};

export default WeeklyActivityChart;
