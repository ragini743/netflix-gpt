import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { openai } from '../utils/openai'
import { options } from '../utils/constant'
import { addGptMoviesResults } from '../utils/gptSlice'


const GptSeaarchBar = () => {
  const dispatch = useDispatch()
    const langSelector = useSelector((store) => store.config.lang)
    const searchText = useRef(null) ;

    const searchMovieTMDB = async(movie) =>{
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",options);
      const json = await data.json() ;
      return json.results;

    };

    const handleGptSearchClick = async() =>{
  console.log(searchText.current.value)
  // make an api call to GPT api and get movie Results
 const gptQuery = "acts ass a  movieRecommendation system and suggest some movies for the query"+searchText.current.value +" only give me names of 5 movies ,comma separated like the given example ahead  . example Results : gadar ,sholey ,koi mil gya ,bagvan  "
  const gptResults  = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });
    if(!gptResults.choices){
      alert("no movies  results here")
    }
  
    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.message?.content.split(",")

  //  const gptMovies =["koi mil gya"," raone " ,"siya k ram"]
    // for each movie I 'll search TMDB api
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))
    //  for each iteration we get a promise
    const tmdbResults = await promiseArray.all(promiseArray)
    console.log("tmdb",tmdbResults)
    dispatch(addGptMoviesResults({movieName:gptMovies,movieResult:tmdbResults}))
    // dispatch(addGptMoviesResults({movieName:gptMovies,movieResult:gptMovies}))

  
    }
   
    // console.log("lang",langSelector)
  return (
    <div className='w-[90%] lg:w-[40%] mx-auto z-[1000] relative -top-[80vh]'>
        <form className='flex items-center'onSubmit={(e) =>e.preventDefault()}>
            <div className='border-gray-700 border-2 rounded-md w-[100%] mr-4'>
                <input type='text' ref={searchText} placeholder={lang[langSelector].gptSearchPlaceholder} className='outline-none w-full p-2 rounded-md'></input>

            </div>
            <div className='bg-red-600 text-white rounded-md' onClick={handleGptSearchClick}>
                <button type='button' className='p-2 rounded-md'>{lang[langSelector].search}</button>
            </div>
        </form>
    </div>
  )
}

export default GptSeaarchBar