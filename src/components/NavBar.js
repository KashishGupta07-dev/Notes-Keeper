import React from 'react'
import { FaBook } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className='w-full bg-yellow-50 p-8' style={{
      boxShadow : "0 0 10px 0 rgba(0, 0, 0, 0.3)"
    }}>
        <div className='flex flex-row items-center gap-x-2 font-navbar font-semibold text-white cursor-pointer'>
            <FaBook size={"20px"}/>
            <div className='text-3xl leading-none'>Notes Keeper</div>
        </div>
    </div>
  )
}

export default NavBar