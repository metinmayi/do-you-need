import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacterUpgrade } from "../../../models/ICharacterUpgrades";

interface Roster {
  roster: ICharacterUpgrade[];
}

const initialState: Roster = {
  roster: [],
};

const rosterSlice = createSlice({
  name: "roster",
  initialState,
  reducers: {
    setRoster: (state, action: PayloadAction<ICharacterUpgrade[]>) => {
      state.roster = action.payload;
    },
    addToRoster: (state, action: PayloadAction<ICharacterUpgrade>) => {
      state.roster.push(action.payload);
    },
  },
});

export const { setRoster, addToRoster } = rosterSlice.actions;

export default rosterSlice.reducer;
