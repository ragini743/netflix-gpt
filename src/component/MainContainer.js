import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies) ;
    // console.log("movies",movies)
    if(movies===null) return ;
    const mainMovie = movies[0]
    // console.log("mainMovie",mainMovie)
    const { original_title , overview ,id} = mainMovie
  return (
    <div className=' w-[100%] h-[100%] aspect-[16/7] overflow-hidden'>
       <VideoTitle title = {original_title} overview = {overview} />
       <VideoBackground movieId ={id} />
    </div>
  )
}

export default MainContainer