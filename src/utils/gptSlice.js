import { createSlice } from "@reduxjs/toolkit";
import { ActionCodeOperation } from "firebase/auth";

const gptSlice = createSlice({
    name: "gpt",

    initialState:{
        showGptSearch:false ,
        movieName:null,
        movieResults:null,
    },
    reducers:{
        toggleGptSearchView:(state,action) =>{
      state.showGptSearch = !state.showGptSearch
        },
        addGptMoviesResults:(state,action) =>{
            const {movieName,movieResults} = action.payload
            state.movieName=movieName;
            state.movieResults=movieResults;
        }
    },
});

export const {toggleGptSearchView,addGptMoviesResults} = gptSlice.actions

export default gptSlice.reducer ;