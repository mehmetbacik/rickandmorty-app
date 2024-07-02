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
        <div className="bg-white bg-opacity-75 character-detail-content">
          <h1 className=" mb-4 title">{characterDetail.name}</h1>
          <div className="flex items-center gap-8">
            <div>
              <img
                src={characterDetail.image}
                alt={characterDetail.name}
                className="w-full h-64 object-cover mb-4"
              />
            </div>
            <div>
              <p>
                <strong>Status:</strong> {characterDetail.status}
              </p>
              <p>
                <strong>Species:</strong> {characterDetail.species}
              </p>
              <p>
                <strong>Gender:</strong> {characterDetail.gender}
              </p>
              <p>
                <strong>Origin:</strong> {characterDetail.origin.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;
