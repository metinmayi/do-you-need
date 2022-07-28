import { configureStore } from "@reduxjs/toolkit";

import rosterReducer from "./features/roster/rosterSlice";
export const store = configureStore({
    reducer: rosterReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>