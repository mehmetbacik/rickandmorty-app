import React from "react";
import "../styles/main.scss";
import EpisodesList from "../features/episodes/EpisodesList";

const EpisodeListPage: React.FC = () => {
  return (
    <div className="episode-list">
      <EpisodesList />
    </div>
  );
};

export default EpisodeListPage;