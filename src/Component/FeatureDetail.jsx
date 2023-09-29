import React from 'react'

function FeatureDetail({src, title, text}) {
  return (
    <div className='flex items-start gap-5'>
        <div>
            <img src={src} alt="" />
        </div>
        <div>
            <h4 className='text-lg font-bold text-[#120B48]'>{title}</h4>
            <p className='text-sm lg:text-base text-gray-500 mt-2'>{text}</p>
        </div>
    </div>
  )
}

export default FeatureDetail