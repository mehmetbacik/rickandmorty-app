import React from "react";

interface EpisodeItemProps {
  episode: {
    id: number;
    name: string;
    air_date: string;
    episode: string;
  };
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({ episode }) => {
  return (
    <div className="item bg-white bg-opacity-75" key={episode.id}>
      <h3>
        <strong>{episode.name}</strong>
      </h3>
      <p>
        <strong>Air Date:</strong> {episode.air_date}
      </p>
      <p>
        <strong>Episode:</strong> {episode.episode}
      </p>
    </div>
  );
};

export default EpisodeItem;
