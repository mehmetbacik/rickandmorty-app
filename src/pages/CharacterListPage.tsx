import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { getCharacters, setPage } from "../features/characters/charactersSlice";
import CharactersList from "../features/characters/CharactersList";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

const CharacterListPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { characters, loading, error, totalPages, currentPage, noResults } =
    useSelector((state: RootState) => state.characters);
  const [filters, setFilters] = useState<{
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
  }>({});

  useEffect(() => {
    dispatch(getCharacters({ filters, page: currentPage }));
  }, [dispatch, filters, currentPage]);

  const handleFilterChange = (newFilters: {
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
  }) => {
    setFilters(newFilters);
    dispatch(setPage(1));
  };

  const handleCardClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <div className="container mx-auto p-4">
      <Filter onFilterChange={handleFilterChange} />
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && noResults && <p>Sorry, no results found.</p>}
      {!loading && !error && !noResults && (
        <CharactersList
          characters={characters}
          onCharacterClick={handleCardClick}
        />
      )}
      {!loading && !error && !noResults && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default CharacterListPage;
