import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { getLocations } from "../features/locations/locationsSlice";
import LocationsList from "../features/locations/LocationsList";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

const LocationsListPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { locations, loading, error, totalPages, currentPage } = useSelector(
    (state: RootState) => state.locations
  );
  const [filters, setFilters] = useState<{
    name?: string;
    type?: string;
    dimension?: string;
  }>({});

  useEffect(() => {
    dispatch(getLocations({ page: currentPage, filters }));
  }, [dispatch, currentPage, filters]);

  const handleFilterChange = (newFilters: {
    name?: string;
    type?: string;
    dimension?: string;
  }) => {
    setFilters(newFilters);
  };

  const handleCardClick = (id: number) => {
    navigate(`/location/${id}`);
  };

  const handlePageChange = (page: number) => {
    dispatch(getLocations({ page, filters }));
  };

  return (
    <div className="container mx-auto p-4">
      <Filter onFilterChange={handleFilterChange} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <LocationsList
            locations={locations}
            onLocationClick={handleCardClick}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default LocationsListPage;
