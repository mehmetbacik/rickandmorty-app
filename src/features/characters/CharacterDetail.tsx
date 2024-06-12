import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getCharacterDetail } from "./charactersSlice";

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { characterDetail, loading, error } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    if (id) {
      dispatch(getCharacterDetail(id));
    }
  }, [dispatch, id]);

  return (
    <div className="container mx-auto p-4">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {characterDetail && (
        <div>
          <h1 className="text-2xl font-bold mb-4">{characterDetail.name}</h1>
          <img
            src={characterDetail.image}
            alt={characterDetail.name}
            className="w-full h-64 object-cover mb-4"
          />
          <p>Status: {characterDetail.status}</p>
          <p>Species: {characterDetail.species}</p>
          <p>Gender: {characterDetail.gender}</p>
          <p>Origin: {characterDetail.origin.name}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;
