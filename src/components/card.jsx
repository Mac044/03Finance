import React from 'react'
import { PiNumberCircleThreeThin } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { PiGraduationCapThin } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";



const Card = () => {
  return (
    <div className=' bg-slate-100 mt-16 '>
         <h3 className=' pl-36 absolute'>Popular Courses</h3>
         <div className=' relative -ml-32'><PiNumberCircleThreeThin size={400} color=''/>
         </div>
         <div className=' grid grid-cols-4 gap-4 px-52 py-10'>
        <div className=' rounded-lg h-80 border-white border-solid border-8 bg-white'>
            <img src="/14/course1.jpg" alt="" />
            <p className=' text-green-300 text-right'>Free*</p>
            <h3>An Introduction to Web3</h3>
            <p className=' text-xs mt-2'>This course introduces the fundamental concepts of Blockchain technology.</p>
            <div className=' flex justify-end mt-1 items-center'>
                <p className=' text-xs italic'>Instructor:</p>
                <p className=' text-sm italic'>Muyiwa Adebiyi</p>
            </div>
            <div className=' flex justify-between text-xs mt-2'>
                <div className='flex items-center'>
                <IoPersonOutline/>
                <p>10</p>
                </div>
                <div className='flex items-center'>
                <PiGraduationCapThin />
                <p>2</p>
                </div>
                <div className='flex items-center'>
                <CiClock2 />
                <p>3 hours+</p>
                </div>
            </div>
        </div>
        <div className='rounded-lg h-80 border-white border-solid border-8 bg-white'>
            <img src="/16/course2.png" alt="" />
            <p className=' text-green-300 text-right'>Free*</p>
            <h3>An Introduction to Defi</h3>
            <p className=' text-xs mt-2'>This course introduces the fundamental concepts of Blockchain technology.</p>
            <div className=' flex justify-end mt-1 items-center'>
                <p className=' text-xs italic'>Instructor:</p>
                <p className=' text-sm italic'>Samuel Bamigboye</p>
            </div>
            <div className=' flex justify-between text-xs mt-2'>
                <div className='flex items-center'>
                <IoPersonOutline/>
                <p>10</p>
                </div>
                <div className='flex items-center'>
                <PiGraduationCapThin />
                <p>2</p>
                </div>
                <div className='flex items-center'>
                <CiClock2 />
                <p>3 hours+</p>
                </div>
            </div>
        </div>
        <div className='rounded-lg h-80  border-white border-solid border-8 bg-white'>
            <img src="/15/course3.jpg" alt="" />
            <p className='  text-red-500 text-right'>Paid*</p>
            <h3>Understanding the Concept of Blockchain Technology</h3>
            <p className=' text-xs mt-2'>This course introduces the fundamental concepts of Blockchain technology.</p>
            <div className=' flex justify-end mt-1 items-center'>
                <p className=' text-xs italic'>Instructor:</p>
                <p className=' text-sm italic'>Olaoluwa Olashina</p>
            </div>
            <div className=' flex justify-between text-xs mt-2'>
                <div className='flex items-center'>
                <IoPersonOutline/>
                <p>10</p>
                </div>
                <div className='flex items-center'>
                <PiGraduationCapThin />
                <p>2</p>
                </div>
                <div className='flex items-center'>
                <CiClock2 />
                <p>3 hours+</p>
                </div>
            </div>
        </div>
        <div className='rounded-lg h-80  border-white border-solid border-8 bg-white'>
            <img src="/14/course1.jpg" alt="" />
            <p className=' text-green-300 text-right'>Free*</p>
            <h3>Futures Trading</h3>
            <p className=' text-xs mt-2'>This course introduces the fundamental concepts of Blockchain technology.</p>
            <div className=' flex justify-end mt-1 items-center'>
                <p className=' text-xs italic'>Instructor:</p>
                <p className=' text-sm italic'>Quadri Lawal</p>
            </div>
            <div className=' flex justify-between text-xs mt-2'>
                <div className='flex items-center'>
                <IoPersonOutline/>
                <p>10</p>
                </div>
                <div className='flex items-center'>
                <PiGraduationCapThin />
                <p>2</p>
                </div>
                <div className='flex items-center'>
                <CiClock2 />
                <p>3 hours+</p>
                </div>
            </div>
        </div>
        <div></div>
        <div className='rounded-lg h-60  border-white border-solid border-8 bg-white opacity-50'>
            <img src="/16/course2.png" alt="" />
            <p className='  text-red-500 text-right'>Paid*</p>
            <h3>An Introduction to Defi</h3>
            <p className=' text-xs mt-2'>This course introduces the fundamental concepts of Blockchain technology.</p>
        </div>
        <div className='rounded-lg h-60  border-white border-solid border-8 bg-white opacity-50'>
            <img src="/15/course3.jpg" alt="" />
            <p className=' text-green-300 text-right'>Free*</p>
            <h3>Web 2 vs Web 3</h3>
            <p className=' text-xs mt-2'>This course introduces the fundamental concepts of Blockchain technology.</p>
        </div>
    </div>

     
    </div>

  )
}

export default Card