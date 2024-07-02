import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import { getEpisodeDetail } from "./episodesSlice";

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
      <h1 className="bg-white bg-opacity-75 mb-4 title">
        {episodeDetail.name}
      </h1>
      <div className="bg-white bg-opacity-75 episode-detail-content mb-4">
        <p>
          <strong>Air Date:</strong> {episodeDetail.air_date}
        </p>
        <p>
          <strong>Episode:</strong> {episodeDetail.episode}
        </p>
      </div>
    </div>
  );
};

export default EpisodeDetail;
