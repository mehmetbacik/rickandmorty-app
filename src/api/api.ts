import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (
  filters: {
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
  } = {},
  page: number = 1
) => {
  const params = new URLSearchParams({ ...filters, page: String(page) });
  const response = await axios.get(`${API_URL}/character?${params.toString()}`);
  return response.data;
};

export const fetchCharacterDetail = async (id: string) => {
  const response = await axios.get(`${API_URL}/character/${id}`);
  return response.data;
};
