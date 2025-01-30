import React from "react";
import { QrCode } from "lucide-react";

const Card = ({ color, text, circle }) => {
  const cardStyle = {
    background: color && color.includes("gradient") ? color : "", // if gradient, apply as background
    backgroundColor: !color || !color.includes("gradient") ? color : "", // for static color
    color: text, // apply text color
  };

  return (
    <div
      className={`flex w-[350px] h-[235px] shadow-xl rounded-[25px] flex-col`}
      style={cardStyle}
    >
      {/* Header Section */}
      <div className="flex items-center px-4 py-2 justify-between">
        <div className="flex flex-col">
          <h4 className="text-[12px] opacity-80">Balance</h4>
          <h2 className="text-[20px] font-bold">$5,756</h2>
        </div>
        <QrCode size={24} />
      </div>

      {/* Middle Section */}
      <div className="flex items-center px-4 py-2 justify-between gap-8">
        <div className="flex flex-col">
          <h4 className="text-[12px] opacity-80 uppercase">Card Holder</h4>
          <h2 className="text-[15px]">Eddy Cusuma</h2>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[12px] opacity-80 uppercase">Valid THRU</h4>
          <h2 className="text-[15px]">12/22</h2>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-white/10 px-4 py-5 border-t-[0.5px] rounded-xl flex items-center justify-between mt-auto">
        <div className="w-[300px] h-[30px] flex items-center justify-between">
          <h1 className="text-[22px] font-[600]">3778 **** **** 1234</h1>
          <svg
            width="36"
            height="24"
            viewBox="0 0 44 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill={circle} fillOpacity="0.8" />
            <circle cx="29" cy="15" r="15" fill={circle} fillOpacity="0.8" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
