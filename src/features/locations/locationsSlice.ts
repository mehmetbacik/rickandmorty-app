import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLocations, fetchLocationDetail } from "../../api/api";

export const getLocations = createAsyncThunk(
  "locations/getLocations",
  async (
    { page, filters }: { page: number; filters: any } = { page: 1, filters: {} }
  ) => {
    const data = await fetchLocations(page, filters);
    return data;
  }
);

export const getLocationDetail = createAsyncThunk(
  "locations/getLocationDetail",
  async (id: string) => {
    const data = await fetchLocationDetail(id);
    return data;
  }
);

const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    locations: [] as any[],
    locationDetail: null as any | null,
    loading: false,
    error: null as string | null,
    totalPages: 0,
    currentPage: 1,
    filters: {} as any,
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
      .addCase(getLocations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.locations = action.payload.results;
        state.totalPages = action.payload.info.pages;
      })
      .addCase(getLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(getLocationDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLocationDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.locationDetail = action.payload;
      })
      .addCase(getLocationDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const { setPage, setFilters } = locationsSlice.actions;
export default locationsSlice.reducer;
