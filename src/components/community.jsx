import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";



const Community = () => {
  return (
    <div className=' pt-10 bg-slate-50'>
        <h1 className=' text-center'>Join Our Communities</h1>
        <div className='flex justify-around'>
            <img src="/19/communities.jpg" alt="" />
            <div className=' flex flex-col gap-10 mt-52'>
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