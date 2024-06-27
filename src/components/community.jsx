import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";



const Community = () => {
  return (
    <div className=' lg:pt-10 lg:bg-slate-50'>
        <h1 className=' lg:text-center'>Join Our Communities</h1>
        <div className=' lg:flex lg:justify-around'>
            <img src="/19/communities.jpg" alt="" />
            <div className=' lg:flex lg:flex-col lg:gap-10 lg:mt-52'>
                <button className=' rounded-lg border-solid w-96 h-16 bg-white flex justify-around pt-6'> 
                <FaTelegram color='skyblue' size={20}/>
                   Telegram Channel</button>
                <button className=' rounded-lg border-solid w-96 h-16 bg-white flex justify-around pt-6'>
                <FaDiscord color='blurple' size={20}/>
                    Discord Channel
                    </button>
            </div>
        </div>

    </div>
  )
}

export default Community