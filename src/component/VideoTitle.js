import React from 'react'

const VideoTitle = ({title ,overview}) => {
  return (
    <div className=' pt-4  relative z-50 text-white top-10 ml-20 w-[20%]'>
        <h1 className="font-bold text-2xl">{title}</h1>
        <h1 className='mt-4'>{overview}</h1>
        <div className='flex items-center  text-white z-50 mt-4 ' style={{filter:"saturate(0.5)"}}>
            <div className='bg-transparent border-2 opacity-100  drop-shadow-sm hover:font-bold  rounded-lg mr-6'>
              <button className='py-2 px-8 rounded-lg text-lg '>Play</button>
            </div>
            <div className='bg-transparent border-2 opacity-100  drop-shadow-sm hover:font-bold  rounded-lg'>
              <button  className='py-2 px-4 rounded-lg text-lg'>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle