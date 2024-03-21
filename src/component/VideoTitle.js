import React from 'react'

const VideoTitle = ({title ,overview}) => {
  return (
    <div className='   relative z-50 text-white ml-4 md:ml-20 w-[30%] md:w-[20%]  bg-opacity-25 h-full flex flex-col justify-center'>
        <h1 className="font-bold text-sm md:text-2xl">{title}</h1>
        <h1 className='md:mt-4 text-[0.25rem] md:text-sm'>{overview}</h1>
        <div className='flex  items-stretch text-white z-50 md:mt-4 ' style={{filter:"saturate(0.5)"}}>
            <div className='bg-transparent border-2 opacity-100  drop-shadow-sm hover:font-bold hover:opacity-80  rounded-sm md:rounded-lg mr-2 md:mr-6 bg-white text-black'>
              <button className='px-2 md:py-2 md:px-8 rounded-sm md:rounded-lg md:text-lg text-xs '>Play</button>
            </div>
            <div className='bg-transparent border-2 opacity-100  drop-shadow-sm hover:font-bold   rounded-sm md:rounded-lg flex fle-col justify-center'>
              <button  className='px-2 md:py-2 md:px-8  rounded-sm md:rounded-lg md:text-lg text-[0.30rem] '>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle