import React from "react";

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

interface LocationsListProps {
  locations: Location[];
  onLocationClick?: (id: number) => void;
}

const LocationsList: React.FC<LocationsListProps> = ({
  locations,
  onLocationClick,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {locations.map((location) => (
        <div
          key={location.id}
          className="border p-4 cursor-pointer"
          onClick={() => onLocationClick && onLocationClick(location.id)}
        >
          <h2 className="text-xl font-bold">{location.name}</h2>
          <p>Type: {location.type}</p>
          <p>Dimension: {location.dimension}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationsList;
