import React from 'react'
import {AiOutlineWechat} from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'
import {TbMilitaryRank} from 'react-icons/tb'
import {BiUser,BiWallet } from 'react-icons/bi'

const Sidebar = () => {
    const options = [
        {title:'Explore', icon: <MdOutlineExplore/>},
        {title:'Ranking', icon: <TbMilitaryRank/>},
        {title:'Profile', icon:<BiUser/>},
        {title:'My wallet', icon: <BiWallet/>},
        {title:'Blogs', icon:<AiOutlineWechat/> },
    ]
  return (
    <div className='flex flex-col items-center justify-center p-8  w-[20%] gap-4 outline outline-outline outline-1 border-r-outline h-[100vh]'>
          <div className='w-[60%]'>
      <h3 className='text-white text-center p-3  bg-purple w-[100%]'>S</h3>
      <p className='font-bold text-center'>Strap</p>
          </div>
      <div className='flex flex-col gap-8 h-[70%] justify-between'>
      
      {options.map((opt)=>{
        return (
          <div className='flex items-center gap-2 '>
            <span>{opt.icon}</span>
            <h3>{opt.title}</h3>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Sidebar