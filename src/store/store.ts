import { configureStore } from "@reduxjs/toolkit";

import rosterReducer from "./features/roster/rosterSlice";
import userReducer from "./features/authentication/userSlice";
import guildReducer from "./features/guild/guildSlice";
export const store = configureStore({
  reducer: { rosterReducer, userReducer, guildReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
