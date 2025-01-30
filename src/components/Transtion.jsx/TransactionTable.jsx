import React, { useState } from "react";

const transactions = [
    { id: "#12548796", desc: "Spotify Subscription", type: "Shopping", card: "1234 ****", date: "28 Jan, 12.30 AM", amount: -2500 },
    { id: "#12548796", desc: "Freepik Sales", type: "Transfer", card: "1234 ****", date: "25 Jan, 10.40 PM", amount: 750 },
    { id: "#12548796", desc: "Mobile Service", type: "Service", card: "1234 ****", date: "20 Jan, 10.40 PM", amount: -150 },
    { id: "#12548796", desc: "Wilson", type: "Transfer", card: "1234 ****", date: "15 Jan, 03.29 PM", amount: -1050 },
    { id: "#12548796", desc: "Emilly", type: "Transfer", card: "1234 ****", date: "14 Jan, 10.40 PM", amount: 840 },
    { id: "#12548797", desc: "Netflix Subscription", type: "Entertainment", card: "1234 ****", date: "10 Jan, 02.00 PM", amount: -1200 },
    { id: "#12548798", desc: "Amazon Shopping", type: "Shopping", card: "1234 ****", date: "5 Jan, 08.30 PM", amount: -700 },
    { id: "#12548799", desc: "Salary Credit", type: "Income", card: "1234 ****", date: "1 Jan, 10.00 AM", amount: 5000 },
];

const itemsPerPage = 5;

const TransactionTable = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(transactions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentTransactions = transactions.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="w-[1110px] h-[397px] bg-white shadow-md rounded-xl p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Recent Transactions</h2>

            {/* Tabs */}
            <div className="flex border-b mb-2">
                {["All Transactions", "Income", "Expense"].map((tab, i) => (
                    <button key={i} className={`px-4 py-2 text-sm font-medium ${i === 0 ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}>
                        {tab}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="overflow-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-gray-500 border-b">
                        <tr>
                            <th className="py-2">Description</th>
                            <th>Transaction ID</th>
                            <th>Type</th>
                            <th>Card</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Receipt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTransactions.map((txn, i) => (
                            <tr key={i} className="border-b">
                                <td className="py-2 flex items-center gap-2">
                                    {txn.amount > 0 ? "⬇️" : "⬆️"} {txn.desc}
                                </td>
                                <td>{txn.id}</td>
                                <td>{txn.type}</td>
                                <td>{txn.card}</td>
                                <td>{txn.date}</td>
                                <td className={`font-medium ${txn.amount > 0 ? "text-green-500" : "text-red-500"}`}>
                                    {txn.amount > 0 ? `+$${txn.amount}` : `-$${Math.abs(txn.amount)}`}
                                </td>
                                <td>
                                    <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-100">
                                        Download
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4 px-2">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="text-sm text-blue-500 disabled:text-gray-400"
                    disabled={currentPage === 1}
                >
                    &lt; Previous
                </button>

                <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium ${currentPage === i + 1 ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    className="text-sm text-blue-500 disabled:text-gray-400"
                    disabled={currentPage === totalPages}
                >
                    Next &gt;
                </button>
            </div>
        </div>
    );
};

export default TransactionTable;
