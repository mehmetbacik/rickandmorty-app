import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { getCharacters } from "../features/characters/charactersSlice";
import CharactersList from "../features/characters/CharactersList";
import Filter from "../components/Filter";

const ListPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { characters, loading, error, noResults } = useSelector(
    (state: RootState) => state.characters
  );
  const [filters, setFilters] = useState<{
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
  }>({});

  useEffect(() => {
    dispatch(getCharacters(filters));
  }, [dispatch, filters]);

  const handleFilterChange = (newFilters: {
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
  }) => {
    setFilters(newFilters);
  };

  const handleCardClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <Filter onFilterChange={handleFilterChange} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {noResults && <p>Sorry, no results found.</p>}
      {!loading && !error && !noResults && (
        <CharactersList
          characters={characters}
          onCharacterClick={handleCardClick}
        />
      )}
    </div>
  );
};

export default ListPage;
