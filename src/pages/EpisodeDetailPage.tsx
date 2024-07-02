import React from "react";
import "../styles/main.scss";
import EpisodeDetail from "../features/episodes/EpisodeDetail";

const EpisodeDetailPage: React.FC = () => {
  return (
    <div className="episode-detail">
      <EpisodeDetail />
    </div>
  );
};

export default EpisodeDetailPage;