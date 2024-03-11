import React from 'react'

const VideoTitle = ({title ,overview}) => {
  return (
    <div className=' pt-4'>
        <h1 className="">{title}</h1>
        <h1>{overview}</h1>
        <div className='flex items-center  text-white z-50 ' style={{filter:"saturate(0.5)"}}>
            <div className='bg-gray-500 hover:font-bold mx-4'>
              <button className='py-1 px-4'>Play</button>
            </div>
            <div className='bg-gray-500  hover:font-bold mx-4'>
              <button  className='py-1 px-4'>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle