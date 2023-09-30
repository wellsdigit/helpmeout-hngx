import React from 'react'
import { Dropdown } from 'flowbite-react';
import Script from './Script';

function TypscriptComp() {
  return (
    <div>
        <p className='mb-2'>Transcript</p>
        <Dropdown
            dismissOnClick={false}
            label="English"
            style={{background: '#f3f4f6', color: 'rgb(209 213 219)', border: '1px solid rgb(156 163 175)', borderRadius: '5px'}}
        >
          <Dropdown.Item className='hover:bg-gray-100 px-2'>English</Dropdown.Item>
          <Dropdown.Item className='hover:bg-gray-100 px-2'>French</Dropdown.Item>
        </Dropdown>
        <div className='h-72 my-10 overflow-auto script'>
          <div className='flex gap-10 flex-col w-[90%] md:w-[80%]'>
            <Script
              time='0.01'
              text={'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the '}
            />
            <Script
              time='0.01'
              text={'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the '}
            />
            <Script
              time='0.01'
              text={'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the '}
            />
            <Script
              time='0.01'
              text={'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the '}
            />
          </div>
        </div>
    </div>
  )
}

export default TypscriptComp;