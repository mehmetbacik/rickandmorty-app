import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getEpisodes, setPage, setFilters } from "./episodesSlice";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Filter from "../../components/Filter";

const EpisodesList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { episodes, loading, error, totalPages, currentPage, filters } =
    useSelector((state: RootState) => state.episodes);

  useEffect(() => {
    dispatch(getEpisodes({ page: currentPage, filters }));
  }, [dispatch, currentPage, filters]);

  const handleEpisodeClick = (id: number) => {
    navigate(`/episode/${id}`);
  };

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (newFilters: {
    name?: string;
    episode?: string;
  }) => {
    dispatch(setFilters(newFilters));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="bg-white bg-opacity-75 mb-4 title">Episodes</h1>
      <Filter onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="episode-list-item cursor-pointer bg-white bg-opacity-75"
            onClick={() => handleEpisodeClick(episode.id)}
          >
            <h2 className="text-xl font-bold">{episode.name}</h2>
            <p>Air Date: {episode.air_date}</p>
            <p>Episode: {episode.episode}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default EpisodesList;
