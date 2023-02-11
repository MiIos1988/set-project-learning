import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null };

const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser(state, action) {
      state.user = action.payload;
      console.log(action.payload);
    },
  },
});

export const { saveUser } = userSlicer.actions;
export default userSlicer.reducer;
