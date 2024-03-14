import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSeaarchBar = () => {
    const langSelector = useSelector((store) => store.config.lang)
    console.log("lang",langSelector)
  return (
    <div className='w-[90%] lg:w-[40%] mx-auto z-[1000] relative -top-[80vh]'>
        <form className='flex items-center'>
            <div className='border-gray-700 border-2 rounded-md w-[100%] mr-4'>
                <input type='text' placeholder={lang[langSelector].gptSearchPlaceholder} className='outline-none w-full p-2 rounded-md'></input>

            </div>
            <div className='bg-red-600 text-white rounded-md'>
                <button type='button' className='p-2 rounded-md'>{lang[langSelector].search}</button>
            </div>
        </form>
    </div>
  )
}

export default GptSeaarchBar