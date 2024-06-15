import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCharacters, fetchCharacterDetail } from "../../api/api";

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (
    params: {
      filters?: {
        name?: string;
        status?: string;
        species?: string;
        type?: string;
        gender?: string;
      };
      page?: number;
    } = {}
  ) => {
    const data = await fetchCharacters(params.filters, params.page);
    return data;
  }
);

export const getCharacterDetail = createAsyncThunk(
  "characters/getCharacterDetail",
  async (id: string) => {
    const data = await fetchCharacterDetail(id);
    return data;
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [] as any[],
    characterDetail: null as any | null,
    loading: false,
    error: null as string | null,
    noResults: false,
    totalPages: 0,
    currentPage: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.noResults = false;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload.results;
        state.totalPages = action.payload.info.pages;
        state.noResults = action.payload.results.length === 0;
        state.error = null;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.loading = false;
        state.characters = [];
        if (action.error.message === "Request failed with status code 404") {
          state.noResults = true;
          state.error = null;
        } else {
          state.error = action.error.message ?? null;
          state.noResults = false;
        }
      })
      .addCase(getCharacterDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCharacterDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.characterDetail = action.payload;
      })
      .addCase(getCharacterDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const { setPage } = charactersSlice.actions;
export default charactersSlice.reducer;
