import React from 'react'

function Video({src, time}) {
  return (
    <div className='w-full z-10 bg-white border rounded-2xl p-2 md:p-5'>
        <div className='rounded-2xl w-full border overflow-hidden relative'>
            <img src={src} alt="" />
            <span className='inline-block py-1 px-2 md:py-2 md:px-4 text-sm md:text-base bg-gray-200 absolute bottom-3 right-4 rounded-md'>{time}</span>
        </div>
    </div>
  )
}

export default Video;