import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    // console.log("movies",movies)
    if(title===null) return null ;
    if(movies===null) return null;
  return (
    <div className='relative z-[200] '>
       <h1 className='pl-2 md:pl-4 text-lg md:text-xl py-2  md:py-4 text-white'>{title}</h1>
       <div className={'flex overflow-x-scroll pt-2 scrollbar' }>
         {movies.map((movie) => <MovieCard key={movie.id} posterPath = {movie.poster_path} />)}
      
       </div>
    </div>
  )
}

export default MovieList;