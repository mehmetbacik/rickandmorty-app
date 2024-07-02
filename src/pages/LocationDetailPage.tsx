import React from "react";
import "../styles/main.scss";
import LocationDetail from "../features/locations/LocationDetail";

const LocationDetailPage: React.FC = () => {
  return (
    <div className="location-detail">
      <LocationDetail />
    </div>
  );
};

export default LocationDetailPage;