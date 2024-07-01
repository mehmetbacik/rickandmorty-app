import React from "react";
import "../styles/main.scss";
import CharactersList from "../features/characters/CharactersList";

const CharacterListPage: React.FC = () => {

  return (
    <div className="character-list">
      <CharactersList />
    </div>
  );
};

export default CharacterListPage;
