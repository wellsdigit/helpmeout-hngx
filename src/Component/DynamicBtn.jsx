import React from 'react'

function DynamicBtn({text, onClick}) {
  return (
    <button
    onClick={onClick}
    type="button"
    className="mt-5 w-full text-white bg-[#120B48] hover:bg-[#120b58] focus:ring-4 focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2"
    >
        {text}
    </button>
  )
}

export default DynamicBtn;