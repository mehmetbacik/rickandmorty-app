import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { getEpisodes } from "../features/episodes/episodesSlice";
import { useNavigate } from "react-router-dom";

const EpisodeList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { episodes, loading, error } = useSelector(
    (state: RootState) => state.episodes
  );

  useEffect(() => {
    dispatch(getEpisodes());
  }, [dispatch]);

  const handleEpisodeClick = (id: number) => {
    navigate(`/episode/${id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Episodes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="border p-4 cursor-pointer"
            onClick={() => handleEpisodeClick(episode.id)}
          >
            <h2 className="text-xl font-bold">{episode.name}</h2>
            <p>Air Date: {episode.air_date}</p>
            <p>Episode: {episode.episode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
