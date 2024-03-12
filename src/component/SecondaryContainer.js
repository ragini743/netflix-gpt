import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    console.log("movie",movies)
    if(movies===null) return;
  return (
    <div className=' font-bold z-[100]  relative'>SecondaryContainer
    <MovieList title = {"now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer


// movieList-Popular
// moviecard*
// movieList -now Playing
// movieList - Trending
// movieList -horror