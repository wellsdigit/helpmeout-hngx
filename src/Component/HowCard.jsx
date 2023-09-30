import React from 'react';
import vidImg from '../assets/images/video.png'

function HowCard({title, text, num}) {
  return (
    <div className='w-[75%] md:w-[40%] lg:w-[25%] text-[#141414] flex gap-5 flex-col items-center'>
        <div className='flex items-center justify-center w-12 h-12 rounded-full font-bold inter text-2xl text-white bg-[#120B48]'>{num}</div>
        <h3 className='text-lg font-bold text-[#120B48]'>{title}</h3>
        <p className='text-center inter text-gray-500'>{text}</p>
        <img src={vidImg} alt="" />
    </div>
  )
}

export default HowCard;