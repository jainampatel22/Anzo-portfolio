import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
<div  className='fixed w-full z-10 p-16 flex items-center justify-end'>
    <button className=' border-4 text-xl  bg-black px-9 py-2 rounded-full text-white  hover:bg-gray-500'>Hire me</button>
    <i className="ri-more-2-fill text-2xl ml-1"></i>
</div>
  )
}

export default Header