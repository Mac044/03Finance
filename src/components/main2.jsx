import React from 'react'

const Main2 = () => {
  return (
    <div>
        <div className=" lg:px-40">
       <div className='lg:flex md:flex lg:justify-between relative lg:py-0 py-10'>
        <div className=' lg:text-left lg:mt-14'>
          <h1 className=' text-5xl lg:text-7xl text-center lg:text-left'> We teach you about finance</h1>
          <p className=' text-xl lg:text lg:text-3xl lg:mt-2 absolute lg:mb-0 mt-52 lg:text-left lg:w-6/12 text-center lg:w-4/ '> Financial information to achieve wealth creation, wealth sustainability,and wealth management</p>
           <button className='border border-solid bg-blue-600 lg:px-5 lg:py-2 py-4 px-10 text-white lg:ml-0 ml-24 lg:mb-0 lg:mt-0 mt-20 absolute top-96 text-2xl lg:text-xl '>Read More</button>
        </div>
       <img className=' w-52 lg:w-auto lg:ml-0 ml-24 lg:p-0 p-3' src="Group.jpg" alt="" />
       </div>
        <div className=" lg:h-32 lg:w-32 lg:rounded-full lg:bg-blue-800 lg:absolute lg:right-40 lg:top-32"></div>
        <div className=" lg:h-7 lg:w-7 lg:rounded-full lg:bg-indigo-400 lg:absolute lg:right-52 lg:top-2/4 lg:mt-16"></div>
       </div>
       {/* courses stundents and teachers */}
       <div className=" ml-28 mt-44 lg:mt-0 lg:ml-0 lg:px-48">
       <div className=" lg:w-full lg:h-24 lg:bg-slate-100 lg:mt-36 lg:flex lg:justify-around lg:pt-3">
        <div className=" grid grid-rows-3 grid-flow-col lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-2 text-2xl lg:text-xl">
          <img className=" row-span-3 lg:row-span-3" src="/13/courses.jpg" alt="" />
          <h3 className=" col-span-2 lg:col-span-2 text-blue-800">10+</h3>
          <p className=" row-span-2 lg:row-span-2">Courses</p>
        </div>
        <div className=" grid grid-rows-3 grid-flow-col lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-2 text-2xl lg:text-xl">
          <img className=" row-span-3 lg:row-span-3" src="/11/stundents.jpg" alt="" />
          <h3 className=" col-span-2 lg:col-span-2 text-blue-800">75+</h3>
          <p className=" row-span-2 lg:row-span-2">Students</p>
        </div>
        <div className=" grid grid-rows-3 grid-flow-col lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-2 text-2xl lg:text-xl">
          <img className=" row-span-3 lg:row-span-3" src="/12/teachers.jpg" alt="" />
          <h3 className=" col-span-2 lg:col-span-2 text-blue-800">5+</h3>
          <p className=" row-span-2 lg:row-span-2">Teachers</p>
        </div>
       </div>
       </div>
    </div>
  )
}

export default Main2