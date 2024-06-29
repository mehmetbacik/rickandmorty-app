import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { getEpisodes } from "../features/episodes/episodesSlice";

const Episode: React.FC = () => {
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
      <div className="content">
        {randomEpisodes.map((episode) => (
          <div className="item bg-white bg-opacity-75" key={episode.id}>
            <h3>{episode.name}</h3>
            <p>
              <strong>Air Date:</strong> {episode.air_date}
            </p>
            <p>
              <strong>Episode:</strong> {episode.episode}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episode;
