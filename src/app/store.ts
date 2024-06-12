import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../features/characters/charactersSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
