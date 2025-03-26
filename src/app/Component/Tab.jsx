import React from 'react'

const Tab = ({active, selectTab, children}) => {
    const buttonClasses= active ? 'text-white border-b-2 border-purple-500 font-bold' : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab} className={`px-4 py-2 ${buttonClasses}`}> <p>  {children}</p> </button>
  )
}

export default Tab