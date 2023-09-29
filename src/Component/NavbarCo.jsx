import React from 'react';
import { Navbar } from 'flowbite-react';
import logo from '../assets/images/logo-white.png';
import { Link } from 'react-router-dom';


function NavbarCo() {
  return (
    <>
    
        <Navbar
        fluid
        className='shadow-sm shadow-zinc-200 px-5 md:px-20 py-6 fixed w-full'
        >
        <Navbar.Brand href="https://flowbite-react.com">
            <img
            alt="HelpMeOut"
            className="mr-3 w-32 sm:h-9"
            src={logo}
            />
        </Navbar.Brand>
        <div className="flex md:order-2">
            <Link to="/" className='text-base font-bold mt-2 me-4 md:mt-0 md:me-0 text-[#120B48]'>
                Get Strated
            </Link>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <div className='my-2 md:my-0'>
                <a href="" className='hover:text-[#120B48] capitalize font-semibold'>Features</a>
            </div>
            <div>
                <a href="" className='hover:text-[#120B48] capitalize font-semibold'>How it works</a>
            </div>
        </Navbar.Collapse>
        </Navbar>
    </>
  )
}

export default NavbarCo;