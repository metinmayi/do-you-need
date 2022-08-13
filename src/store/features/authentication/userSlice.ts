import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  guild: string;
  usergroup: string;
}

const initialState: User = {
  username: "",
  guild: "",
  usergroup: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.username = action.payload.username;
      state.guild = action.payload.guild;
      state.usergroup = action.payload.usergroup;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
