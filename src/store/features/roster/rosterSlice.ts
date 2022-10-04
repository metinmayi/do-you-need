import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../../../models/ICharacter";

interface Roster {
  roster: ICharacter[];
}

const initialState: Roster = {
  roster: [],
};

const rosterSlice = createSlice({
  name: "roster",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<ICharacter[]>) => {
      state.roster = action.payload;
    },
    addToList: (state, action: PayloadAction<ICharacter>) => {
      state.roster.push(action.payload);
    },
  },
});

export const { setList, addToList } = rosterSlice.actions;

export default rosterSlice.reducer;
