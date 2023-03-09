import { useEffect, useState } from "react";
import React from 'react'
import Modal from "./Modal";
import {data} from '../data'


const Card = () => {
    const [nfts, setNfts] = useState([])
    const [nft, setNft] = useState([{}])
    const [show, setShow] = useState(false)
    const [id, setId] = useState('')
    useEffect(()=>{
        setNfts(data)
    }, [])

    const modal = (id) =>{
        setNft(nft.splice(0,1,nfts.filter((item)=> {return (item.key === id ? item : '' )})) )
      console.log(id, nft[0][0])
      setShow(true)
      setId(id)
    }
    const toogleOff = () =>{
      setShow(false)
    }
   
    
  return (
    <>
    <div className="flex flex-col pt-10">
        <p className="font-bold text-[30px] text-center">Your <c className='text-purple'>favourite</c><br/> NFT Marketplace</p>
        <div className="flex gap-6 justify-center">
          <div className="flex items-center   gap-2">
          <p>Ethereum</p>
          <p className="w-[10px] h-[10px] rounded-full bg-purple"></p>
          </div>
          <p>Solana</p>
        </div>
        <div className="pt-5 grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-5 pl-5 mx-auto">
          {nfts.map((nft)=>{
            return (
          <div onClick={()=>{modal(nft.key)}} key={nft.key} className="hover:cursor-pointer relative w-[180px]  h-[180px] md:w-[200px] md:h-[200px] shadow-xl">
            <img className="w-[150px]  h-[150px] md:w-[200px] md:h-[200px]" src={nft.image_url} alt={nft.name}/>
            <p className="absolute bottom-2 left-[10px] ">{nft.name.length > 20? `${nft.name.slice(0,13)}...`:nft.name }</p>
          </div>
            )
          })}
         
        </div>
 <Modal one={id} show={show} off={toogleOff}/>
    </div>

    </>
  )
}

export default Card