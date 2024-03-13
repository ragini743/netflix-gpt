import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log("movies",movies)
    if(movies===null) return ;
  return (
    <div className='relative z-[200] '>
       <h1 className='pl-4 text-xl py-4 text-white'>{title}</h1>
       <div className='flex overflow-scroll pt-2'>
         {movies.map((movie) => <MovieCard key={movie.id} posterPath = {movie.poster_path} />)}
      
       </div>
    </div>
  )
}

export default MovieList