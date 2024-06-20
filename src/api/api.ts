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

export const fetchEpisodes = async (page: number, filters: any) => {
  const params = new URLSearchParams({ page: page.toString(), ...filters });
  const response = await axios.get(`${API_URL}/episode/?${params.toString()}`);
  return response.data;
};

export const fetchEpisodeDetail = async (id: string) => {
  const response = await axios.get(`${API_URL}/episode/${id}`);
  return response.data;
};
