import React from "react";
import EpisodeItem from "./EpisodeItem";

interface EpisodeListProps {
  episodes: any[];
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {
  return (
    <div className="content">
      {episodes.map((episode) => (
        <EpisodeItem key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default EpisodeList;
