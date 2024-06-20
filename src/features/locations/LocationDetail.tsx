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
    <div className="location-detail">
      <h2>{locationDetail.name}</h2>
      <p>Type: {locationDetail.type}</p>
      <p>Dimension: {locationDetail.dimension}</p>
    </div>
  );
};

export default LocationDetail;
