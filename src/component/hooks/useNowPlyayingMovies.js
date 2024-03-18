import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../../utils/constant";
import { addNowPlayingMovies } from "../../utils/moviesSlice";


const useNowPlayingMovies =() =>{
    const dispatch = useDispatch() ;
    const nowPlayingMovies = useSelector(store => store.movies.addNowPlayingMovies)
     const getNowPlayingMovies = async() =>{

        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const json = await data.json()
        // console.log("jspn",json.results)
        dispatch(addNowPlayingMovies(json.results));
      }
    
      useEffect(() =>{
        if(!nowPlayingMovies)getNowPlayingMovies() ;
      },[])

 
}

export default useNowPlayingMovies