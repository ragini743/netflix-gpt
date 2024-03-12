import React from 'react'
import { IMG_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='mr-8 '>
        <div className='w-44'>
            <img src={IMG_URL +posterPath} alt=''></img>
        </div>
    </div>
  )
}

export default MovieCard