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
  const { characters, loading, error } = useSelector(
    (state: RootState) => state.characters
  );
  const [filters, setFilters] = useState<{
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
  }>({});
  const [isFiltered, setIsFiltered] = useState(false);

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
    setIsFiltered(true);
  };

  const handleCardClick = (id: string) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <Filter onFilterChange={handleFilterChange} />
      {loading && <p>Loading...</p>}
      {error && <p>Sorry, no results found.</p>}
      {!error && !isFiltered && <CharactersList characters={characters} />}
      {!error && isFiltered && characters.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {characters.map((character) => (
            <div
              key={character.id}
              className="border p-4 cursor-pointer"
              onClick={() => handleCardClick(character.id)}
            >
              <h2 className="text-xl font-bold">{character.name}</h2>
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-64 object-cover mb-4"
              />
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListPage;
