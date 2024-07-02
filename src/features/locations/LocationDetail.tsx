import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import { getLocationDetail } from "./locationsSlice";

const LocationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { locationDetail, loading, error } = useSelector(
    (state: RootState) => state.locations
  );

  useEffect(() => {
    if (id) {
      dispatch(getLocationDetail(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!locationDetail) return null;

  return (
    <div className="container mx-auto p-4">
      <h1 className="bg-white bg-opacity-75 mb-4 title">
        {locationDetail.name}
      </h1>
      <div className="bg-white bg-opacity-75 location-detail-content">
        <p>
          <strong>Type:</strong> {locationDetail.type}
        </p>
        <p>
          <strong>Dimension:</strong> {locationDetail.dimension}
        </p>
      </div>
    </div>
  );
};

export default LocationDetail;
