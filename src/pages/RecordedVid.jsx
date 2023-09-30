import React from 'react'
import DashboardNav from '../Component/DashboardNav';
import editImg from '../assets/images/edit.svg'
import frame1 from '../assets/images/frame1.jpg';
import Video from '../Component/Video';
import ShareVid from '../Component/ShareVid';
import TypscriptComp from '../Component/TypscriptComp';

function RecordedVid() {
  return (
    <div className='w-full z-10 bg-white py-10 px-5 md:px-20'>
        <DashboardNav />
        <div className='path'>
            <p className='text-gray-400 mt-10 md:mt-12 text-sm md:text-base'>Home / Recent Videos <span className='capitalize text-[#120B48]'> / How To Create A Facebook Ad Listing </span></p>
        </div>
        <div className='flex items-start gap-3 mt-8 md:mt-12'>
            <h3 className='text-base md:text-xl font-semibold text-[#120B48]'>How To Create A Facebook Ad Listing </h3>
            <img src={editImg} alt="" />
        </div>
        <div className='mt-7 md:mt-10'>
            <Video 
                src={frame1}
                time={'00:34'}
            />
        </div>
        <div className='mt-10'>
            <ShareVid />
        </div>
        <div className='mt-10'>
            <TypscriptComp/>
        </div>
    </div>
  )
}

export default RecordedVid;