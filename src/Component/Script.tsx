import React from 'react'

interface ScriptProps {
    time: string;
    text: string;
}

const Script:React.FC<ScriptProps> = ({time, text}) => {
  return (
    <div className='flex gap-8 scrpt'>
        <h5 className='text-sm md:text-base font-bold'>{time}</h5>
        <p className='text-sm md:text-base'>{text}</p>
    </div>
  )
}

export default Script;