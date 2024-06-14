import React from "react";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface CharactersListProps {
  characters: Character[];
  onCharacterClick?: (id: number) => void;
}

const CharactersList: React.FC<CharactersListProps> = ({
  characters,
  onCharacterClick,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {characters.map((character) => (
        <div
          key={character.id}
          className="border p-4 cursor-pointer"
          onClick={() => onCharacterClick && onCharacterClick(character.id)}
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
  );
};

export default CharactersList;
