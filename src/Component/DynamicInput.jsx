import React from 'react'

function DynamicInput({id, labelFor, label, type, placeholder}) {
  return (
    <div>
        <label className='block mb-2 text-sm font-medium text-[#141414]' htmlFor={labelFor}>{label}</label>
        <input type={type} id={id} className="bg-transparent border-2 border-[#141414] text-[#141414] text-sm rounded-lg focus:shadow-lg focus:shadow-gray-300 transition block w-full p-2.5 focus:border-black focus:outline-none focus:ring-0" placeholder={placeholder}/>
    </div>
  )
}

export default DynamicInput