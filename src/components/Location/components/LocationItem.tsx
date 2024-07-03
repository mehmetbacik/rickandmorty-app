import React from "react";

interface LocationItemProps {
  location: {
    id: number;
    name: string;
    type: string;
    dimension: string;
  };
}

const LocationItem: React.FC<LocationItemProps> = ({ location }) => {
  return (
    <div className="item bg-white bg-opacity-75" key={location.id}>
      <h3>
        <strong>{location.name}</strong>
      </h3>
      <p>
        <strong>Type:</strong> {location.type}
      </p>
      <p>
        <strong>Dimension:</strong> {location.dimension}
      </p>
    </div>
  );
};

export default LocationItem;
