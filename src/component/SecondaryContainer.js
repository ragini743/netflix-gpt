import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    // console.log("movie",movies)
    if(movies===null) return;
  return (
    <div className=' font-bold  bg-black'>
        <div className='z-[100]  relative  md:-mt-32 md:pl-8 pl-4 -mt-4'>
            <MovieList title = {"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title = {"Top Rated"} movies={movies.topRatedMovies} />
            <MovieList title = {"Upcoming"} movies={movies.upcomingMovies} />
            <MovieList title = {"Popular"} movies={movies.popularMovies} />
            <MovieList title = {"Trending"} movies={movies.trendingMovies} />
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