import React from 'react'
import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/2.jpg'
import image3 from '../assets/images/3.jpg'
import { Button } from 'flowbite-react'
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';

function HeroComponent() {
  return (
    <div className='flex flex-col pt-32 lg:pt-36 pb-16 gap-10 lg:flex-row items-center justify-between bg-white text-[#141414] px-5 md:px-20 py-6'>
        <div className='flex flex-col gap-5 lg:w-[38%]'>
            <div className='capitalize text-5xl xl:text-6xl font-black'>
                show them <br /> don't just tell
            </div>
            <p>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
            <a href={image3} download="extension">
                <button
                type="button"
                className="mt-5 text-white bg-[#120B48] hover:bg-[#120b58] focus:ring-4 focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 flex"
                >
                    Install HelpMeOut
                    <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </button>
            </a>
        </div>
        <div className='hero-image lg:w-[56%] gap-6 flex md:p-5 xl:p-16 justify-between'>
            <div className='flex w-[50%] flex-col gap-6'>
                <div className='rounded-lg overflow-hidden'>
                    <img src={image1} alt="..." />
                </div>
                <div className='rounded-lg overflow-hidden'>
                    <img src={image2} alt="..." />
                </div>
            </div>
            <div className='w-[46.7%] h-full'>
                <div className='rounded-lg overflow-hidden h-full'>
                    <img src={image3} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroComponent;