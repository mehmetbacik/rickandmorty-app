import React from "react";
import LocationItem from "./LocationItem";

interface LocationListProps {
  locations: any[];
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <div className="content">
      {locations.map((location) => (
        <LocationItem key={location.id} location={location} />
      ))}
    </div>
  );
};

export default LocationList;
