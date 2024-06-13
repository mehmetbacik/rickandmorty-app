import React, { useState } from "react";

interface FilterProps {
  onFilterChange: (filters: {
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
  }) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ name, status, species, type, gender });
  };

  const handleResetFilters = () => {
    setName("");
    setStatus("");
    setSpecies("");
    setType("");
    setGender("");
    onFilterChange({});
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 mr-2"
      >
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <input
        type="text"
        placeholder="Species"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 mr-2"
      />
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="border p-2 mr-2"
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <button
        onClick={handleFilterChange}
        className="bg-blue-500 text-white p-2 mr-2"
      >
        Filter
      </button>
      <button
        onClick={handleResetFilters}
        className="bg-gray-500 text-white p-2"
      >
        Reset
      </button>
    </div>
  );
};

export default Filter;
