import React from 'react'
import GptSeaarchBar from './GptSeaarchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { Login_background_URL } from '../utils/constant';

const GptSearch = () => {
  return (
    <div className=' pt-4'>
        <div className="absolute top-0 bottom-0 inset-0 ">
        <img
          src={Login_background_URL}
          className="w-full h-full"
          alt="background-logo"
        ></img>
     
      </div>
       <GptSeaarchBar />
       <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch ;
// gpt searchBar
// gptMovieSuggestion