import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../../utils/constant';
import { addTrailerVideo } from '../../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch ()
    const getBackgroundVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
        options
      );
      const json = await data.json();
      // console.log("json", json);
      const filterData = json.results.filter((video) => video.type==="Trailer") ;
      const trailer =filterData.length?filterData[0]: json.results[0];
      console.log("trailer", trailer);
      dispatch(addTrailerVideo(trailer))
    };
    useEffect(() => {
      getBackgroundVideos();
    }, []);
}

export default useMovieTrailer