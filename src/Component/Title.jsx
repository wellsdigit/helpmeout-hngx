import React from 'react'

function Title({ttext, stext}) {
  return (
    <div className='text-center text-[#141414]'>
        <h3 className='text-3xl font-bold'>{ttext}</h3>
        <p className='text-gray-500 text-sm lg:text-base mt-2'>{stext}</p>
    </div>
  )
}

export default Title