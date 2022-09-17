import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayerGuild } from "../../../models/IPlayerGuild";

const initialState: IPlayerGuild = {
  name: "",
  server: "",
  id: "",
  playerRank: "",
};

const guildSlice = createSlice({
  name: "guild",
  initialState,
  reducers: {
    setGuild: (state, action: PayloadAction<IPlayerGuild>) => {
      state.name = action.payload.name;
      state.server = action.payload.server;
      state.id = action.payload.id;
      state.playerRank = action.payload.playerRank;
    },
  },
});

export const { setGuild } = guildSlice.actions;

export default guildSlice.reducer;
