import React, {useState, useEffect} from 'react'
import {GiCancel} from 'react-icons/gi'
import ReactDOM from 'react-dom'
import {data} from '../data'
const Modal = ({one, show,off}) => {
    
   if(!show){
    return null
   }
   const dad = data.filter((item)=> {return (item.key === one ? item : '' )})
   console.log(show, one, dad[0].description)
   
    return (
    <div className= 'flex items-center  fixed w-[100vw] h-[100vh] bg-bg z-10'>
        <div className='bg-[rgb(255,255,255)] w-[50%] h-[max-content] border-2 border-outline shadow-xl  p-4 rounded-[8px]'>
            <div  className='flex justify-end'>
            <GiCancel onClick={()=>{off()}}  size={25} className='text-red-500 '/>
            </div>
            <div className='pt-3'>
             <div className='flex flex-col'>
                    <p className='text-gray-800' >Total minted: </p>
                    <p className='text-gray-600'>{dad[0].stats.total_minted}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-gray-800'>Contact address: </p>
                    <p className='text-gray-600'>{dad[0].contracts[0].contract_address}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-gray-800'>Description: </p>
                    <p className='text-gray-600'>{dad[0].description}</p>
                </div>
            </div>
            <div className='flex justify-center gap-5'>
                <a href={dad[0].exchange_url} className='px-20 bg-purple'>Buy</a>
                <button className='px-20 border-purple border-2'>Sell</button>
            </div>
            <div>

            </div>
        </div>
    </div>
    // document.getElementById('portal')
  )
}

export default Modal