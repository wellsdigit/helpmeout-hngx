import React from 'react'
import Title from './Title';
import HowCard from './HowCard';

function HiWork() {
  return (
    <div className='bg-white px-8 md:px-20 py-20'>
        <Title 
        ttext={"How it works"}
        />
        <div className='w-full flex flex-col flex-wrap md:flex-row justify-center items-center gap-10 md:justify-between mt-16'>
            <HowCard
            num={'1'}
            title={'Record Screen'}
            text={'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.'}
            />
            <HowCard
            num={'2'}
            title={'Share Your Recording'}
            text={'We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.'}
            />
            <HowCard
            num={'3'}
            title={'Learn Effortlessly'}
            text={'Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.'}
            />
        </div>
    </div>
  )
}

export default HiWork;