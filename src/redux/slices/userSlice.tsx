import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: '',
  id: '',
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: string, id: string }>) => {
      state.user = action.payload.user;
      state.id = action.payload.id;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;