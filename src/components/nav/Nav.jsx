import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineSetting} from 'react-icons/ai'
import './nav.css'
const Nav = () => {
  return (
    <div className='flex w-[100%] h-[50px]'>
        <div className=' w-[100%] flex items-center'>
          
          <div className='relative border-2 border-outline pl-8 w-[100%] h-[100%]'> 
            <input type='search' placeholder='Search NFT, collections and users'
            className='border-0 focus:outline-0 rounded-[5px] w-[100%] h-[100%] px-5 search'
            />
            <BsSearch className='absolute top-5 left-1' size={20}/>
          </div>

          <div className='flex pl-3'>
          <FaUserCircle size={30}/>
          <AiOutlineSetting size={30}/>
          </div>

        </div>
    </div> 
  )
}

export default Nav