import { IoPersonOutline } from "react-icons/io5";
import { PiGraduationCapThin } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import Navbar2 from "../pages/navbar";


const Course = ({name, description, image, intructor, free, noOfStudents, duration, numberOfTutors}) => {

  return (
    <div>
      <div>
     <div className='rounded-lg border-white border-solid border-8 bg-white'>
         <img src= {image} alt="" />
         <p className=' text-green-300 text-right'> </p>
         <h3>{name}3</h3>
         <p className=' text-xs mt-2'> {description} </p>
         <div className=' flex justify-end mt-1 items-center'>
             <p className=' text-xs italic'>Instructor:</p>
             <p className=' text-sm italic'> {intructor} </p>
         </div>
         <div className=' flex justify-between text-xs mt-2'>
             <div className='flex items-center'>
             <IoPersonOutline/>
             <p> {noOfStudents} </p>
             </div>
             <div className='flex items-center'>
             <PiGraduationCapThin />
             <p> {duration} </p>
             </div>
             <div className='flex items-center'>
             <CiClock2 />
             <p> {numberOfTutors} </p>
             </div>
         </div>
     </div>
 </div>
 </div>
  )
}

export default Course