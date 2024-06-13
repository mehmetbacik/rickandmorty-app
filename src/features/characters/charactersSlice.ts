import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCharacters, fetchCharacterDetail } from "../../api/api";

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (
    filters: {
      name?: string;
      status?: string;
      species?: string;
      type?: string;
      gender?: string;
    } = {}
  ) => {
    const data = await fetchCharacters(filters);
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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(getCharacterDetail.pending, (state) => {
        state.loading = true;
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

export default charactersSlice.reducer;
