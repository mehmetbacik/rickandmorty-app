import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { getEpisodes } from "../features/episodes/episodesSlice";

const Episode: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { episodes, loading, error } = useSelector(
    (state: RootState) => state.episodes
  );
  const [randomEpisode, setRandomEpisode] = useState<any>(null);

  useEffect(() => {
    if (episodes.length === 0) {
      dispatch(getEpisodes());
    } else {
      const randomIndex = Math.floor(Math.random() * episodes.length);
      setRandomEpisode(episodes[randomIndex]);
    }
  }, [dispatch, episodes]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!randomEpisode) return null;

  return (
    <div className="random-episode">
      <h2>Episode</h2>
      <p>
        <strong>Name:</strong> {randomEpisode.name}
      </p>
      <p>
        <strong>Air Date:</strong> {randomEpisode.air_date}
      </p>
      <p>
        <strong>Episode:</strong> {randomEpisode.episode}
      </p>
    </div>
  );
};

export default Episode;
