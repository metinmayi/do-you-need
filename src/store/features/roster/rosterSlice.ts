import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayer } from "../../../models/Player";

interface Roster {
    roster: IPlayer[]
};

const initialState: Roster = {
    roster: []
};

const rosterSlice = createSlice({
    name: 'roster',
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<IPlayer[]>) => {
            state.roster = action.payload;
        },
        addToList: (state, action: PayloadAction<IPlayer>) => {
            state.roster.push(action.payload);
        }
    }
});

export const {setList, addToList} = rosterSlice.actions;

export default rosterSlice.reducer;