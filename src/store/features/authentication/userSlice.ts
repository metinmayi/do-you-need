import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  guild: string;
}

const initialState: User = {
  username: "",
  guild: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.username = action.payload.username;
      state.guild = action.payload.guild;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
