import React from 'react'
import DashboardNav from '../Component/DashboardNav';
import Greeting from '../Component/Greeting';
import { RiSearchLine } from "react-icons/ri";
import frame1 from '../assets/images/frame1.jpg';
import frame2 from '../assets/images/frame2.jpg';
import RecordCard from '../Component/RecordCard';

const Dashboard = () => {
  return (
    <div className='w-full'>
        <div className='fixed w-full z-10 bg-white border-b py-10 px-5 md:px-20'>
            <DashboardNav />
            <div className='mt-14 flex gap-7 flex-col lg:flex-row justify-center items-center lg:justify-between'>
                <Greeting />
                <form className='w-[90%] lg:w-[30%]'>
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <RiSearchLine className='text-gray-400'/>
                        </div>
                        <input
                        type="text"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-500 placeholder-gray-400 border border-gray-300 rounded-lg bg-gray-100 focus:ring-0 focus:border-gray-400"
                        placeholder="Search Mockups, Logos..."
                        required=""
                        />
                    </div>
                </form>
            </div>
        </div>
        <div className='bg-white pb-10 pt-80 lg:pt-64 px-5 md:px-20'>
            <div className='py-10 overflow-x-hidden overflow-y-hidden'>
                <p className='text-[#141414]/80'>Recent Files</p>
                <div className='mt-6 flex flex-wrap md:flex-nowrap gap-6'>
                    <RecordCard 
                        src={frame1}
                        title={'How to create Facebook Ad listing'}
                        date={'SEPTEMBER 23, 2023'}
                        time={'00:34'}
                        to={'/display'}
                    />
                    <RecordCard 
                        src={frame2}
                        title={'How to create Facebook Ad listing'}
                        date={'SEPTEMBER 23, 2023'}
                        time={'00:34'}
                        to={'/display'}
                    />
                </div>
            </div>
            <div className='py-10 overflow-x-hidden overflow-y-hidden'>
                <p className='text-[#141414]/80'>Files from last week</p>
                <div className='mt-6 flex flex-wrap md:flex-nowrap gap-6'>
                    <RecordCard 
                        src={frame2}
                        title={'How to create Facebook Ad listing'}
                        date={'SEPTEMBER 23, 2023'}
                        time={'00:34'}
                        to={'/display'}
                    />
                    <RecordCard 
                        src={frame1}
                        title={'How to create Facebook Ad listing'}
                        date={'SEPTEMBER 23, 2023'}
                        time={'00:34'}
                        to={'/display'}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard;