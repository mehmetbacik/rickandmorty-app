import React from "react";
import "../styles/main.scss";
import LocationsList from "../features/locations/LocationsList";

const LocationsListPage: React.FC = () => {

  return (
    <div className="location-list">
      <LocationsList />
    </div>
  );
};

export default LocationsListPage;
