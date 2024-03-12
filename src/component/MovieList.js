import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log("movies",movies)
    if(movies===null) return ;
  return (
    <div>
       <h1>{title}</h1>
       <div className='flex overflow-scroll mt-4'>
         {movies.map((movie) => <MovieCard key={movie.id} posterPath = {movie.poster_path} />)}
      
       </div>
    </div>
  )
}

export default MovieList