import React from "react";

const Buttons = ({ onMonthlyClick, onQuarterlyClick }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-6 md:mt-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 md:mr-4 md:mb-0"
        onClick={onMonthlyClick}
      >
        Monthly Data
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onQuarterlyClick}
      >
        Quarterly Data
      </button>
    </div>
  );
};

export default Buttons;
