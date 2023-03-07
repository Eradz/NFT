import React from 'react'
import './footer.css'
import ig from '../../assets/I4G.png'
export const Footer = () => {
  return (
    <div className='contain'>
    <div className='zuri'>
        <span>Zuri</span>
        <div className='dot'></div>
        <span>Internship</span>
    </div>
    <div className='hng'>
        <span>HNG Internship 9 Frontend Task</span>
    </div>
    <div className='zuri-img'>
        <img src={ig} alt='I4G' />
    </div>
    </div>
  )
}
