import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../../utils/constant";
import { addUpcomingMovies } from "../../utils/moviesSlice";


const useUpcomingMovies =() =>{
    const dispatch = useDispatch() ;
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies)
    const getUpcomingMovies = async() =>{

        
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        const json = await data.json()
        // console.log("jspn",json.results)
        dispatch(addUpcomingMovies(json.results));
      }
    
      useEffect(() =>{
       !upcomingMovies && getUpcomingMovies()
      },[])

 
}

export default useUpcomingMovies;