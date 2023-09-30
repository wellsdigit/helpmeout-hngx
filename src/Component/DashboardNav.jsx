import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-white.png';
import avatar from '../assets/images/profile-circle.svg'
import { TfiAngleDown } from "react-icons/tfi";

const DashboardNav = () => {
  return (
    <nav className='flex justify-between'>
        <div>
            <Link to='/' className='block w-36'>
                <img src={logo} alt="" />
            </Link>
        </div>
        <div className='flex justify-center gap-3 items-center'>
            <img src={avatar} alt="" />
            <span className='capitalize hidden md:block'>John Mark</span>
            <TfiAngleDown className='cursor-pointer'/>
        </div>
    </nav>
  )
}

export default DashboardNav