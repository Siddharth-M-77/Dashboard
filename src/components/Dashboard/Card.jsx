import { QrCode } from "lucide-react";
import React from "react";

const Card = ({ color, text }) => {
  return (
    <div
      className={`flex w-[350px] h-[235px] shadow-xl rounded-2xl flex-col`}
      style={{ backgroundColor: color, color: text }}
    >
      {/* Header Section */}
      <div className="flex items-center px-4 py-2 justify-between">
        <div className="flex flex-col">
          <h4 className="text-xs opacity-80">Balance</h4>
          <h2 className="text-lg font-bold">$5,756</h2>
        </div>
        <QrCode size={24} />
      </div>

      {/* Middle Section */}
      <div className="flex items-center px-4 py-2 justify-between gap-8">
        <div className="flex flex-col">
          <h4 className="text-xs opacity-80 uppercase">Card Holder</h4>
          <h2 className="text-sm">Eddy Cusuma</h2>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xs opacity-80 uppercase">Valid THRU</h4>
          <h2 className="text-sm">12/22</h2>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-white/10  px-4 py-5 border-t-[0.5px]  rounded-xl flex items-center justify-between mt-auto">
        <h1 className="text-sm">3778 **** **** 1234</h1>
        <svg
          width="36"
          height="24"
          viewBox="0 0 44 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="15" fill="black" fillOpacity="0.8" />
          <circle cx="29" cy="15" r="15" fill="black" fillOpacity="0.8" />
        </svg>
      </div>
    </div>
  );
};

export default Card;
