import React from "react";
import "../styles/main.scss";
import CharacterDetail from "../features/characters/CharacterDetail";

const CharacterDetailPage: React.FC = () => {
  return (
    <div className="character-detail">
      <CharacterDetail />
    </div>
  );
};

export default CharacterDetailPage;
