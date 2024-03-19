import { createSlice } from "@reduxjs/toolkit";

const optionalSlice = createSlice({
  name: "option",
  initialState: {
    userName: false,
    option: false,
  },
  reducers: {
    toggleUserName: (state, action) => {
      state.userName = !state.userName;
    },
    toggleOption: (state, action) => {
      state.option = !state.option;
    },
  },
});
export const { toggleUserName, toggleOption } = optionalSlice.actions;
export default optionalSlice.reducer;
