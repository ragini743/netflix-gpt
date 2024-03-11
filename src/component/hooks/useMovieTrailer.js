import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../../utils/constant';
import { addTrailerVideo } from '../../utils/moviesSlice';

const useMovieTrailer = () => {
    const dispatch = useDispatch ()
    const getBackgroundVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/932420/videos?language=en-US",
        options
      );
      const json = await data.json();
      // console.log("json", json);
      const trailer = json.results[0];
      // console.log("trailer", trailer);
      dispatch(addTrailerVideo(trailer))
    };
    useEffect(() => {
      getBackgroundVideos();
    }, []);
}

export default useMovieTrailer