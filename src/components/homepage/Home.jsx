import React from 'react'
import { useState } from 'react'
import {BiShare} from 'react-icons/bi'
import {BsThreeDots} from 'react-icons/bs'
import {FiCamera} from 'react-icons/fi'
import profile from '../../assets/chidi.jpg'
import './home.css'
export const Home = () => {
  const [click , setClick] = useState(false)
  return (
    <>
    <div id='profile_img'>
      <div className='img'>
       <img src={profile} alt='profile' />
       <div className='camera-div'>
       <FiCamera  className='camera'/> 
       </div>
      </div>
       <span id='twitter'>Anaguchidi35</span>
       <span id='slack'>Chidiebere</span>
      </div>
      <BiShare onClick={() => setClick(false)} className={click? 'btn btn1': 'btn btn1 closed ' }/>
      <BsThreeDots onClick={() => setClick(true)} className={!click? 'btn btn2': "closed"}/>
    </>
  )
}
