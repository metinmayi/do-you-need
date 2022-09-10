import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Guild {
  guildID: string;
  rank: string;
}

const initialState: Guild = {
  guildID: "",
  rank: "",
};

const guildSlice = createSlice({
  name: "guild",
  initialState,
  reducers: {
    setGuild: (state, action: PayloadAction<Guild>) => {
      state.guildID = action.payload.guildID;
      state.rank = action.payload.rank;
    },
  },
});

export const { setGuild } = guildSlice.actions;

export default guildSlice.reducer;
