import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../features/characters/charactersSlice";
import episodesReducer from "../features/episodes/episodesSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
