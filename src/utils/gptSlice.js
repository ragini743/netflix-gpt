import { createSlice } from "@reduxjs/toolkit";
import { ActionCodeOperation } from "firebase/auth";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleGptSearchView:(state,action) =>{
      state.showGptSearch = !state.showGptSearch
        },
    },
});

export const {toggleGptSearchView} = gptSlice.actions

export default gptSlice.reducer ;