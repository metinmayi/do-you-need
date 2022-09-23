import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserGuild } from "../../../models/IUserGuild";

const initialState: IUserGuild = {
  name: "",
  realm: "",
  id: "",
  playerRank: "",
  license: "",
  faction: "",
};

const guildSlice = createSlice({
  name: "guild",
  initialState,
  reducers: {
    setGuild: (state, action: PayloadAction<IUserGuild>) => {
      state.name = action.payload.name;
      state.realm = action.payload.realm;
      state.id = action.payload.id;
      state.playerRank = action.payload.playerRank;
    },
  },
});

export const { setGuild } = guildSlice.actions;

export default guildSlice.reducer;
