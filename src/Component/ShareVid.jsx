import React from 'react'
import copy from '../assets/images/copy.svg'
import { BsFacebook, BsTelegram, BsWhatsapp } from "react-icons/bs";


function ShareVid() {
  return (
    <div>
        <div className='flex justify-between gap-1 flex-col lg:flex-row'>
            <form action="" className='w-full lg:w-[35%]'>
                <div className="relative">
                    <input
                        type="email"
                        id="default-search"
                        className="block w-full p-4 pl-4 text-sm text-gray-300 border-none border-gray-300 rounded-lg bg-gray-100 focus:ring-0 focus:border-gray-300"
                        placeholder="enter email of a receiver"
                        disabled
                    />
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-gray-300 hover:bg-gray-300focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-4 py-2"
                        disabled
                    >
                        Send
                    </button>
                </div>
            </form>
            <form action="" className='w-full lg:w-[42%]'>
                <div className="relative">
                    <input
                        type="email"
                        id="default-search"
                        className="block w-full p-4 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:border-gray-300"
                        placeholder="enter email of a receiver"
                        disabled
                        value={'https://www.helpmeout/Untitled_Video_20232509'}
                    />
                    <button
                        type="submit"
                        className="text-balck absolute right-2.5 bottom-2.5 bg-gray-100 border-2 border-gray-900 hover:bg-gray-300focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-4 py-1 flex items-center"
                    >
                        <img className='w-4 mr-2' src={copy} alt="" />
                        Copy
                    </button>
                </div>
            </form>
        </div>
        <div className='mt-10'>
            <p className=''>Share your video </p>
            <div className='flex gap-5 mt-4'>
                <button
                    type="button"
                    className="text-balck bg-transparent border-2 border-gray-900 focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-4 py-1 flex items-center justify-center"
                >
                    <BsFacebook className='text-[#1877F2] text-lg md:mr-2' />
                    <span className='hidden md:block'>Facebook</span>
                </button>
                <button
                    type="button"
                    className="text-balck bg-transparent border-2 border-gray-900 focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-4 py-1 flex items-center justify-center"
                >
                    <BsWhatsapp className='text-[#25D366] text-lg md:mr-2' />
                    <span className='hidden md:block'>Whatsapp</span>
                </button>
                <button
                    type="button"
                    className="text-balck bg-transparent border-2 border-gray-900 focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-4 py-1 flex items-center justify-center"
                >
                    <BsTelegram className='text-[#2AABEE] text-lg md:mr-2'/>
                    <span className='hidden md:block'>Telegram</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ShareVid;