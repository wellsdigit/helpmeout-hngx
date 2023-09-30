import React from 'react';
import linkIc from '../assets/images/link.svg';
import more from '../assets/images/more.svg';
import { Link } from 'react-router-dom';


function RecordCard({src, time, title, date, to}) {
  return (
    <div>
        <div className='block rounded-2xl w-full md:w-[100%] lg:w-[98%] border p-4'>
            <Link to={to} className='block rounded-2xl w-full border overflow-hidden relative'>
                <img src={src} alt="" />
                <span className='inline-block py-2 px-4 bg-gray-200 absolute bottom-3 right-4 rounded-md'>{time}</span>
            </Link>
            <div className='mt-7'>
                <div className='flex items-center justify-between'>
                    <Link to={to} className='font-semibold'>{title}</Link>
                    <div className='flex gap-3'>
                        <img src={linkIc} alt="" />
                        <img src={more} alt="" />
                    </div>
                </div>
                <span className='text-gray-400 text-sm px-2 md:py-2 md:px-4 md:text-base'>{date}</span>
            </div>
        </div>
    </div>
  )
}

export default RecordCard