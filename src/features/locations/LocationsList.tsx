import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getLocations, setPage, setFilters } from "./locationsSlice";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";

const LocationsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { locations, loading, error, totalPages, currentPage, filters } =
    useSelector((state: RootState) => state.locations);

  useEffect(() => {
    dispatch(getLocations({ page: currentPage, filters }));
  }, [dispatch, currentPage, filters]);

  const handleLocationClick = (id: number) => {
    navigate(`/location/${id}`);
  };

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (newFilters: {
    name?: string;
    type?: string;
    dimension?: string;
  }) => {
    dispatch(setFilters(newFilters));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="bg-white bg-opacity-75 mb-4 title">Locations</h1>
      <Filter onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {locations.map((location) => (
          <div
            key={location.id}
            className="location-list-item cursor-pointer bg-white bg-opacity-75"
            onClick={() => handleLocationClick(location.id)}
          >
            <h2 className="text-xl font-bold">{location.name}</h2>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
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

export default LocationsList;
