import React from 'react';

const Table = () => {
    // Loan data
    const TData = [
        { id: 1, loanMoney: 500, leftToRepay: 300, duration: "3 months", interestRate: "12%", installment: 2000 },
        { id: 2, loanMoney: 1000, leftToRepay: 700, duration: "6 months", interestRate: "10%", installment: 2500 },
        { id: 3, loanMoney: 1500, leftToRepay: 1000, duration: "12 months", interestRate: "8%", installment: 3000 },
        { id: 4, loanMoney: 2000, leftToRepay: 1500, duration: "18 months", interestRate: "9%", installment: 3500 },
        { id: 5, loanMoney: 2500, leftToRepay: 2000, duration: "24 months", interestRate: "7%", installment: 4000 },
    ];

    // Calculate totals
    const totalLoanMoney = TData.reduce((sum, item) => sum + item.loanMoney, 0);
    const totalLeftToRepay = TData.reduce((sum, item) => sum + item.leftToRepay, 0);
    const totalInstallments = TData.reduce((sum, item) => sum + item.installment, 0);

    return (
        <div className='w-full'>
            <h2 className="text-[22px] font-[600] text-[#333B69] mb-5">Active Loans Overviews</h2>
            <div className="w-full rounded-[25px] bg-white shadow-md overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-gray-300 border-opacity-50">
                            <th className="p-4 text-[16px] font-[500] text-left text-gray-500">SL NO</th>
                            <th className="p-4 text-[16px] font-[500] text-left text-gray-500">Loan Money</th>
                            <th className="p-4 text-[16px] font-[500] text-left text-gray-500">Left to Repay</th>
                            <th className="p-4 text-[16px] font-[500] text-left text-gray-500">Duration</th>
                            <th className="p-4 text-[16px] font-[500] text-left text-gray-500">Interest Rate</th>
                            <th className="p-4 text-[16px] font-[500] text-left text-gray-500">Installment</th>
                            <th className="p-4 text-[16px] font-[500] text-left text-gray-500">Repay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TData.map((item, index) => (
                            <tr key={item.id} className="border-b border-gray-200">
                                <td className="p-4 text-center">{index + 1}</td>
                                <td className="p-4 text-center">${item.loanMoney}</td>
                                <td className="p-4 text-center">${item.leftToRepay}</td>
                                <td className="p-4 text-center">{item.duration}</td>
                                <td className="p-4 text-center">{item.interestRate}</td>
                                <td className="p-4 text-center">${item.installment} / month</td>
                                <td className="p-4 text-center">
                                    <button className="w-[100px] text-[#1814F3] border border-[#1814F3] h-[35px] rounded-[50px]">
                                        Repay
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr className="border-t-2 border-gray-300 font-[600] text-red-400">
                            <td className="p-4 text-center">Total</td>
                            <td className="p-4 text-center">${totalLoanMoney}</td>
                            <td className="p-4 text-center">${totalLeftToRepay}</td>
                            <td className="p-4 text-center">-</td>
                            <td className="p-4 text-center">-</td>
                            <td className="p-4 text-center">${totalInstallments} / month</td>
                            <td className="p-4 text-center">-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
