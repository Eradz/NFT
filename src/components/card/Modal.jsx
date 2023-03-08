import React from 'react'

const Modal = () => {

  return (
    <div className='flex items-center  fixed w-[100vw] h-[100vh] bg-bg'>
        <div className='bg-[#FFFFFF] w-[300px] h-[300px] border-2 border-outline shadow-xl ml-[30%] p-4 rounded-[8px]'>
            
            <div className='flex justify-center gap-5'>
                <button className='px-20 bg-purple'>Buy</button>
                <button className='px-20 border-purple border-2'>Sell</button>
            </div>
            
            <div className='pt-3'>
                <div className='flex justify-between'>
                    <p>Price</p>
                    <p>C</p>
                </div>
                <div className='flex justify-between'>
                    <p>Contact address</p>
                    <p>takerfee</p>
                </div>
                <div className='flex justify-between'>
                    <p>takerfee</p>
                    <p>Contact</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Modal