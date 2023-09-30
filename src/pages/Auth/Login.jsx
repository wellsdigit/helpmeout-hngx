import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo-white.png';
import Title from '../../Component/Title';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import DynamicInput from '../../Component/DynamicInput';
import DynamicBtn from '../../Component/DynamicBtn';

function Login() {
    const navigate = useNavigate();
    const handleSubmit = ()=> {
        navigate('/dashboard');
    }

  return (
    <div className='p-14'>
        <Link to='/' className='w-36 inline-block'>
            <img className='w-full' src={logo} alt="" />
        </Link>
        <div className='flex flex-col items-center justify-center mt-16 md:w-[50%] lg:w-[35%] pb-5 mx-auto'>
            <div className='w-[80%]'>
                <Title 
                    ttext={'Log in or Sign up'} 
                />
                <p className='text-gray-500 text-center text-sm lg:text-base mt-2'>Join millions of others in sharing successful moves on <span className='text-black'>HelpMeOut</span>.</p>
            </div>
            <div className='w-full mt-10'>
                <form action="" onSubmit={handleSubmit}>
                    <div className=''>
                        <button className='text-[#141414] bg-transparent font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full border-2 border-black justify-center mr-2 mb-2'>
                            <FcGoogle className='text-2xl mr-3'/>
                            <p>Continue with Google</p>
                        </button>
                        <button className='text-[#141414] bg-transparent font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full border-2 border-black justify-center mr-2 mb-2 mt-3'>
                            <FaFacebook className='text-2xl text-[#1877F2] mr-3'/>
                            <p>Continue with Facebook</p>
                        </button>
                    </div>
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-[95%] h-px my-10 bg-gray-300 border-0"/>
                        <span className="absolute px-3 inter font-medium text-gray-300 -translate-x-1/2 bg-[#F9F9FF] left-1/2">or</span>
                    </div>
                    <div className='w-full flex flex-col gap-5'>
                        <DynamicInput
                            type={'email'}
                            labelFor={'email'}
                            name={'email'}
                            id={'eml'}
                            label={'Email'}
                        />
                        <DynamicInput
                            type={'password'}
                            labelFor={'password'}
                            name={'password'}
                            id={'pswd'}
                            label={'Password'}
                        />
                    </div>
                    <DynamicBtn
                        text={'Sign Up'}
                        onClick={handleSubmit}
                    />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;