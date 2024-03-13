import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    console.log("movie",movies)
    if(movies===null) return;
  return (
    <div className=' font-bold  bg-black'>
        <div className='z-[100]  relative  -mt-32 pl-8'>
            <MovieList title = {"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title = {"Trending"} movies={movies.nowPlayingMovies} />
            <MovieList title = {"Popular"} movies={movies.nowPlayingMovies} />
            <MovieList title = {"Upcoming Movies"} movies={movies.nowPlayingMovies} />
            <MovieList title = {"Horror"} movies={movies.nowPlayingMovies} />
        </div>  

  
    </div>
  )
}

export default SecondaryContainer


// movieList-Popular
// moviecard*
// movieList -now Playing
// movieList - Trending
// movieList -horror