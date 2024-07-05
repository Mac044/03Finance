import { RxHamburgerMenu } from "react-icons/rx";
import Footer from "../components/footer";



const About = () => {
  return (
    <div>
       <div className=" flex justify-between"> 
         <img src="/public/03finblue.jpg" alt="" />
         <div className=" lg:hidden">
         <RxHamburgerMenu color="blue"/>
         </div>
       </div>
       <div>
        <h1 className=" text-2xl text-center mt-10">About Us</h1>
        <div>
        <img className=" lg:ml-96 lg:pl-52 ml-24" src="/public/abt.jpg" alt="" />
        <div>
        <p className=" text-center mt-10"> O3 Finance School is an educational institute that is committed to providing financial education for all and sundry in African countries, starting with Nigeria.</p>
        <p className=" text-center mt-10">  Our goal is to empower people with the knowledge and skills they need to create, manage and sustain their wealth by leveraging on prevailing technological innovations.</p>
       <p className=" text-center mt-10"> We believe financial education is tantamount to financial liberation, that is why we are committed to using the latest
        teaching methodology to deliver our program and services.</p>
        <p className=" text-center lg: mt-10">Our approach includes webinars, seminars, conferences, workshops, gaming competitions, cohorts and charity initiatives. </p>
        <p className=" text-center mt-10">Our team is made up of experienced financial professionals who have a solid understanding of the financial world and are passionate about empowering people to take control of their future.</p>
        </div>
        </div>
       </div>
       <div className=" text-center lg:mt-10 lg:mb-10">
         <button className=" border border-solid bg-blue-600 lg:px-5 lg:py-2 py-4 px-10 text-white lg:ml-0 lg:mb-0 lg:mt-0 mt-10 text-2xl lg:text-xl">Our Vision</button>
         <button className="border border-solid bg-blue-600 lg:px-5 lg:py-2 py-4 px-10 text-white lg:ml-0 lg:mb-0 lg:mt-0 mt-10 text-2xl lg:text-xl">Our Mission</button>
         <button className=" border border-solid bg-blue-600 lg:px-5 lg:py-2 py-4 px-10 text-white lg:ml-0 lg:mb-0 lg:mt-0 mt-10 text-2xl lg:text-xl">Our Goals</button>
         <button className="border border-solid bg-blue-600 lg:px-5 lg:py-2 py-1 px-10 text-white lg:ml-0 lg:mb-0 lg:mt-0 m-10 text-2xl lg:text-xl">Our Value proposition</button>
       </div>
       <Footer/>
    </div>
  )
}

export default About