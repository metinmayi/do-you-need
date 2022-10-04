import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedBoss {
  bossName: string;
}

const initialState: SelectedBoss = {
  bossName: "vigilant_guardian",
};

const selectedBossSlice = createSlice({
  name: "roster",
  initialState,
  reducers: {
    setSelectedBoss: (state, action: PayloadAction<string>) => {
      state.bossName = action.payload;
    },
  },
});

export const { setSelectedBoss } = selectedBossSlice.actions;

export default selectedBossSlice.reducer;
