import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies" ,
    initialState :{
        nowPlayingMovies:null,
        trailerVideo:null ,
        popularMovies:null,
        upcomingMovies:null ,
        trendingMovies:null,
        topRatedMovies:null,
    } ,
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        } ,
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        } ,
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload
        } ,
        addTrendingMovies:(state,action)=>{
            state.trendingMovies = action.payload
        } ,
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        } ,
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        } ,

    } ,
});
export const {addNowPlayingMovies,addTrailerVideo ,addPopularMovies,addUpcomingMovies,addTrendingMovies ,addTopRatedMovies} = moviesSlice.actions ;
export default moviesSlice.reducer;