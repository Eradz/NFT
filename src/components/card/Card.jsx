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
        // const options = {
        //     method: 'GET',
        //     headers: {accept: 'application/json', 'X-API-KEY': process.env.REACT_APP_API_KEY}
        //   };
          
        //   fetch('https://api.blockspan.com/v1/exchanges/collections?chain=eth-main&exchange=opensea&page_size=25', options)
        //     .then(response => response.json())
        //     .then(response => setNfts(response.results))
        //     .catch(err => console.error(err))
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
   const one = nft[0][0]
    
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
        <p >Project you'll love</p>
        <div className="pt-5 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5 pl-5">
          {nfts.map((nft)=>{
            return (
          <div onClick={()=>{modal(nft.key)}} key={nft.key} className="hover:cursor-pointer relative w-[200px] h-[200px] ">
            <img src={nft.image_url} alt={nft.name}/>
            <p className="absolute bottom-2 left-[10px] ">{nft.name}</p>
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