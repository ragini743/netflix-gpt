import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../../utils/constant";
import { addTrendingMovies} from "../../utils/moviesSlice";


const useTrendingMovies =() =>{
    const dispatch = useDispatch() ;
    const getTrendingMovies = async() =>{

        
        const data = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options);
        const json = await data.json()
        console.log("jspn",json.results)
        dispatch(addTrendingMovies(json.results));
      }
    
      useEffect(() =>{
        getTrendingMovies()
      },[])

 
}

export default  useTrendingMovies;