import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (
  filters: {
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
  } = {}
) => {
  const query = new URLSearchParams(filters).toString();
  const response = await axios.get(`${API_URL}/character?${query}`);
  return response.data.results;
};

export const fetchCharacterDetail = async (id: string) => {
  const response = await axios.get(`${API_URL}/character/${id}`);
  return response.data;
};
