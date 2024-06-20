import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getCharacters, setPage, setFilters } from "./charactersSlice";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Filter from "../../components/Filter";

const CharactersList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { characters, loading, error, totalPages, currentPage, filters } =
    useSelector((state: RootState) => state.characters);

  useEffect(() => {
    dispatch(getCharacters({ page: currentPage, filters }));
  }, [dispatch, currentPage, filters]);

  const handleCharacterClick = (id: number) => {
    navigate(`/character/${id}`);
  };

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (newFilters: {
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
  }) => {
    dispatch(setFilters(newFilters));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Characters</h1>
      <Filter onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <div
            key={character.id}
            className="border p-4 cursor-pointer"
            onClick={() => handleCharacterClick(character.id)}
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
      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CharactersList;
