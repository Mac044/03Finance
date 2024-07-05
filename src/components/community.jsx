import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { PiPlaceholder } from 'react-icons/pi';






const Community = () => {
  return (
    <div className=' lg:pt-10 lg:bg-slate-50 bg-slate-50'>
        <h1 className=' lg:text-center text-4xl p-10'>Join Our Communities</h1>
        <div className=' lg:flex lg:justify-evenly '>
        <div className=' grid grid-cols-2 lg:grid-cols-2 lg:gap-4 lg:px-44'>
                <button className=' rounded-lg border-solid w-52 h-14 bg-white flex justify-around pt-4'> 
                <FaTelegram color='skyblue' />
                   Telegram Channel</button>
                <button className=' rounded-lg border-solid w-52 h-14 bg-white flex justify-around pt-4'>
                <FaDiscord color='blurple' />
                    Discord Channel
                    </button>
                    <button className='rounded-lg border-solid w-52 h-14 bg-white flex justify-around pt-4'>
                    <FaInstagram color='red'/>
                    Instagram
                    </button>
                    <button className='rounded-lg border-solid w-52 h-14 bg-white flex justify-around pt-4'>
                    <FaTwitter color='skyblue'/>
                    Twitter
                    </button>
                    <button className='rounded-lg border-solid w-52 h-14 bg-white flex justify-around pt-4'>
                    <CiFacebook color='blue' size={20}/>
                    Facebook
                    </button>
            </div>
            <img className=' lg:w-64 lg:h-64' src="/19/communities.jpg" alt="" />
        </div>
        <div className=' p-10 relative'>
        <h1 className=' lg:text-3xl text-2xl text-center'> DONT WANT TO MISS OUT ON UPDATES?</h1>
        <p className=' text-center lg:text-xl'>Subscribe to our newsletter and get updated news on tokens, coins and other finance news</p>
        <div className=' lg:ml-12 pt-5'>
        <p className='  lg:h-32 lg:w-32 lg:rounded-full lg:bg-blue-800 absolute hidden lg:block lg:-mt-14  lg:ml-10'></p>
        <input className=' lg:ml-96 pl-5 h-10 lg:w-96' type="email" placeholder='Email Address' name="your email" id="" />
         <button className='w-36 h-10 bg-blue-600 text-white'>Subscribe</button>
        </div>
        </div>
     
    </div>
  )
}

export default Community