import React from 'react'
import { options } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from 'react-redux';

const useNowPlyayingMovies = () => {
    const dispatch = useDispatch() ;
    const getNowPlayingMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const json = await data.json()
        console.log("jspn",json.results)
        dispatch(addNowPlayingMovies(json.results));
      }
    
      useEffect(() =>{
        getNowPlayingMovies()
      },[])
  
}

export default useNowPlyayingMovies