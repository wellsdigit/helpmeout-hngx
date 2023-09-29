import React from 'react'
import Title from './Title';
import record from '../assets/images/recording.svg';
import share from '../assets/images/share.svg';
import revisit from '../assets/images/revisit.svg';
import monitor from '../assets/images/vidrepo.jpg';
import FeatureDetail from './FeatureDetail';
function Features() {
  return (
    <div className='bg-white my-10 px-8 md:px-20 py-16'>
        <Title 
        ttext={'Features'}
        stext={'Key Highlights of Our Extension'}
        />
        <div className='flex flex-col lg:flex-row justify-between mt-5 gap-6 lg:gap-0 lg:mt-24'>
            <div className='lg:min-w-[40%] flex flex-col gap-8 md:gap-12 lg:max-w-[45%] py-8'>
                <FeatureDetail 
                src={record}
                title={"Simple Screen Recording"}
                text={"Effortless screen recording for everyone. Record with ease, no tech expertise required."}
                />
                <FeatureDetail 
                src={share}
                title={"Easy-to-Share URL"}
                text={"Share your recordings instantly with a single link. No attachments, no downloads."}
                />
                <FeatureDetail 
                src={revisit}
                title={"Revisit Recordings"}
                text={"Access and review your past content effortlessly. Your recordings, always at your fingertips."}
                />
            </div>
            <div className='lg:w-[45%]'>
                <div className='rounded-lg overflow-hidden'>
                    <img src={monitor} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features;