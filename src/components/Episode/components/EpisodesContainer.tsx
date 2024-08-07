import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { getEpisodes } from "../../../features/episodes/episodesSlice";
import EpisodeList from "./EpisodeList";

const EpisodesContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { episodes, loading, error } = useSelector(
    (state: RootState) => state.episodes
  );
  const [randomEpisodes, setRandomEpisodes] = useState<any[]>([]);

  useEffect(() => {
    if (episodes.length === 0) {
      dispatch(getEpisodes({ page: 1, filters: {} }));
    } else {
      const shuffledEpisodes = [...episodes].sort(() => Math.random() - 0.5);
      setRandomEpisodes(shuffledEpisodes.slice(0, 4));
    }
  }, [dispatch, episodes]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="random-episodes w-full">
      <div className="headline bg-white bg-opacity-75">
        <h2>Episodes</h2>
      </div>
      <EpisodeList episodes={randomEpisodes} />
    </div>
  );
};

export default EpisodesContainer;
