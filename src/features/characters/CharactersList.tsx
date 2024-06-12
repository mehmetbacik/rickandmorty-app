import React from "react";
import { Link } from "react-router-dom";

interface Character {
  id: number;
  name: string;
  image: string;
}

interface CharactersListProps {
  characters: Character[];
}

const CharactersList: React.FC<CharactersListProps> = ({ characters }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {characters.map((character) => (
        <Link
          key={character.id}
          to={`/detail/${character.id}`}
          className="border p-4 rounded"
        >
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-64 object-cover"
          />
          <h2 className="text-xl mt-2">{character.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default CharactersList;
