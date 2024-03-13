import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../../utils/constant";
import {addTopRatedMovies } from "../../utils/moviesSlice";

const useTopRatedMovies =() =>{
    const dispatch = useDispatch() ;
    const getTopRatedMovies = async() =>{

        
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const json = await data.json()
        // console.log("jspn",json.results)
        dispatch(addTopRatedMovies(json.results));
      }
    
      useEffect(() =>{
        getTopRatedMovies()
      },[])

 
}

export default useTopRatedMovies;
