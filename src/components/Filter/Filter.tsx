import React, { useState, useEffect } from "react";
import FilterInput from "./components/FilterInput";
import FilterSelect from "./components/FilterSelect";
import FilterButtons from "./components/FilterButtons";

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

  useEffect(() => {
    const filters = [];
    if (name) filters.push(`Name: ${name}`);
    if (status) filters.push(`Status: ${status}`);
    if (species) filters.push(`Species: ${species}`);
    if (type) filters.push(`Type: ${type}`);
    if (gender) filters.push(`Gender: ${gender}`);
  }, [name, status, species, type, gender]);

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
    <div className="bg-white bg-opacity-75 mb-4 filter">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
        <FilterInput
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FilterSelect
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={[
            { value: "", label: "Status" },
            { value: "alive", label: "Alive" },
            { value: "dead", label: "Dead" },
            { value: "unknown", label: "Unknown" },
          ]}
        />
        <FilterInput
          placeholder="Species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />
        <FilterInput
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <FilterSelect
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          options={[
            { value: "", label: "Gender" },
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "genderless", label: "Genderless" },
            { value: "unknown", label: "Unknown" },
          ]}
        />
      </div>
      <FilterButtons
        onFilter={handleFilterChange}
        onReset={handleResetFilters}
      />
    </div>
  );
};

export default Filter;
