import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { getLocations } from "../../../features/locations/locationsSlice";
import LocationList from "./LocationList";

const LocationsContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { locations, loading, error } = useSelector(
    (state: RootState) => state.locations
  );
  const [randomLocations, setRandomLocations] = useState<any[]>([]);

  useEffect(() => {
    if (locations.length === 0) {
      dispatch(getLocations({ page: 1, filters: {} }));
    } else {
      const shuffledLocations = [...locations].sort(() => Math.random() - 0.5);
      setRandomLocations(shuffledLocations.slice(0, 4));
    }
  }, [dispatch, locations]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="random-locations w-full">
      <div className="headline bg-white bg-opacity-75">
        <h2>Locations</h2>
      </div>
      <LocationList locations={randomLocations} />
    </div>
  );
};

export default LocationsContainer;
