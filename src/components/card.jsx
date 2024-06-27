import React from 'react'
import Courses from './data';
import Course from './course';



const Card = () => {
  return (
    <div className='lg:bg-slate-100 mt-16'>
       <div className=' pt-10 pl-40'> 
         <h1 className=' text-center text-4xl mr-32 mb-5'>Popular Courses</h1>
         </div>
         <div className=' grid grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:px-44'>
            {Courses.map((item) => {
                return <Course {...item} />
            })}
    </div>
    </div>

  )
}

export default Card