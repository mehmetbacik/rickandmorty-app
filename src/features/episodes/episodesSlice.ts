import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchEpisodes, fetchEpisodeDetail } from "../../api/api";

export const getEpisodes = createAsyncThunk(
  "episodes/getEpisodes",
  async ({
    page,
    filters,
  }: {
    page: number;
    filters: {
      name?: string;
      episode?: string;
    };
  }) => {
    const data = await fetchEpisodes(page, filters);
    return data;
  }
);

export const getEpisodeDetail = createAsyncThunk(
  "episodes/getEpisodeDetail",
  async (id: string) => {
    const data = await fetchEpisodeDetail(id);
    return data;
  }
);

const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    episodes: [] as any[],
    episodeDetail: null as any | null,
    loading: false,
    error: null as string | null,
    totalPages: 0,
    currentPage: 1,
    filters: {},
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEpisodes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEpisodes.fulfilled, (state, action) => {
        state.loading = false;
        state.episodes = action.payload.results;
        state.totalPages = action.payload.info.pages;
      })
      .addCase(getEpisodes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(getEpisodeDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEpisodeDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.episodeDetail = action.payload;
      })
      .addCase(getEpisodeDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const { setPage, setFilters } = episodesSlice.actions;
export default episodesSlice.reducer;
