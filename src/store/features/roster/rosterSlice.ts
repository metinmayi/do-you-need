import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacterUpgrade } from "../../../models/ICharacterUpgrades";

interface Roster {
  roster: ICharacterUpgrade[];
  isLoading: boolean;
}

const initialState: Roster = {
  roster: [],
  isLoading: true,
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
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setRoster, addToRoster, setIsLoading } = rosterSlice.actions;

export default rosterSlice.reducer;
