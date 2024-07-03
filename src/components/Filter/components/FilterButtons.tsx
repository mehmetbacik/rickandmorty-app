import React from "react";

interface FilterButtonsProps {
  onFilter: () => void;
  onReset: () => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onFilter, onReset }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <button
        type="button"
        onClick={onFilter}
        className="bg-blue-500 text-white p-2 w-full"
      >
        Filter
      </button>
      <button
        type="button"
        onClick={onReset}
        className="bg-gray-500 text-white p-2 w-full"
      >
        Reset
      </button>
    </div>
  );
};

export default FilterButtons;
