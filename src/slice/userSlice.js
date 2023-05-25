import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      console.log("redux token : "+action.payload.val);
      state.token=(action.payload.val);
    }
  }
});

export const { setToken } = userSlice.actions;

export default userSlice.reducer;