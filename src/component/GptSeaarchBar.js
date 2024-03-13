import React from 'react'

const GptSeaarchBar = () => {
  return (
    <div className='w-[90%] lg:w-[40%] mx-auto z-[1000] relative -top-[80vh]'>
        <form className='flex items-center'>
            <div className='border-gray-700 border-2 rounded-md w-[100%] mr-4'>
                <input type='text' placeholder='what do you like to watch today ?' className='outline-none w-full p-2 rounded-md'></input>

            </div>
            <div className='bg-red-600 text-white rounded-md'>
                <button type='button' className='p-2 rounded-md'>search</button>
            </div>
        </form>
    </div>
  )
}

export default GptSeaarchBar