import React from 'react';

const Card = ({ name, icon, bgColor, investment, returnColor }) => {
    return (
        <div className="w-[255px] h-[120px] rounded-[25px] bg-white shadow-md flex items-center justify-center">
            <div className="flex items-center justify-center gap-3">
                {/* Icon with dynamic background color */}
                <div className={`flex items-center justify-center ${bgColor} w-[70px] h-[70px] rounded-full`}>
                    <div className="w-[30px] h-[30px] flex items-center justify-center" style={{ color: returnColor }}>
                        {icon}
                    </div>
                </div>
                {/* Loan details */}
                <div className="flex flex-col items-start gap-2">
                    <h2 className="text-[#718EBF] text-[16px] font-[400]">{name}</h2>
                    <h2 className="text-[20px] font-[600]">{investment}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;
