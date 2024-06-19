import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { getEpisodeDetail } from "../features/episodes/episodesSlice";

const EpisodeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { episodeDetail, loading, error } = useSelector(
    (state: RootState) => state.episodes
  );

  useEffect(() => {
    if (id) {
      dispatch(getEpisodeDetail(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!episodeDetail) return null;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{episodeDetail.name}</h1>
      <p>
        <strong>Air Date:</strong> {episodeDetail.air_date}
      </p>
      <p>
        <strong>Episode:</strong> {episodeDetail.episode}
      </p>
      <h2 className="text-xl font-bold mt-4">Characters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {episodeDetail.characters.map((characterUrl: string) => {
          const characterId = characterUrl.split("/").pop();
          return (
            <div key={characterId} className="border p-4">
              <p>Character ID: {characterId}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EpisodeDetail;
