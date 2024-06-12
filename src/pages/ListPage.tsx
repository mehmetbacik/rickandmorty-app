import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { getCharacters } from "../features/characters/charactersSlice";
import CharactersList from "../features/characters/CharactersList";

const ListPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { characters, loading, error } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Characters List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <CharactersList characters={characters} />
    </div>
  );
};

export default ListPage;
