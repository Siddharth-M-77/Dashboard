import React from "react";

const TransactionCard = ({ transactions }) => {
    return (
        <div className="flex flex-col w-[350px] h-[235px] bg-white shadow-xl rounded-2xl  p-4 overflow-hidden">
            {transactions.map((transaction, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between mb-4 last:mb-0"
                >
                    {/* Icon */}
                    <div className="flex items-center gap-3">
                        <div
                            className={`flex items-center justify-center w-12 h-12 rounded-full`}
                            style={{ backgroundColor: transaction.iconBg }}
                        >
                            <transaction.icon className="w-6 h-6" color={transaction.iconColor} />
                        </div>
                        {/* Transaction Info */}
                        <div>
                            <h3 className="font-semibold text-sm text-black">
                                {transaction.title}
                            </h3>
                            <p className="text-xs text-gray-500">{transaction.date}</p>
                        </div>
                    </div>
                    {/* Amount */}
                    <p
                        className={`font-bold ${transaction.amount < 0 ? "text-red-500" : "text-green-500"
                            }`}
                    >
                        {transaction.amount < 0
                            ? `-$${Math.abs(transaction.amount)}`
                            : `+$${transaction.amount}`}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default TransactionCard;
