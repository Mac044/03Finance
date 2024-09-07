import { useState } from "react";
import Login from "./loginIn"
import SignIn from "./signIn"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen)
 
  }



  return (
    <div>
        <nav className=" flex justify-between relative p-2 lg:p-o lg:flex lg:items-center lg:justify-between lg:gap lg:px-40 lg:py-10">
            <Link to="/"><img src="/09/link.jpg" alt="" /></Link>
          <ul className= "hidden lg:flex lg:justify-center lg:gap-7 lg:text-blue-800 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>Courses</li>
            <li>Contact</li>
            <li>Events</li>
          </ul>
           {/* mobile navbar */}
                  <span className=" hidden lg:flex lg:gap-3 lg:gap-md lg:justify-end">
                <div className=" w-0.5 h-11 bg-slate-400"></div>
                <SignIn/>
                <p className=" lg:hidden">/</p>
                <Login/>
            </span>
            <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen && 'active'} nav-icon lg:hidden w-[24px] h-[18px] flex flex-col justify-between cursor-pointer`}>
              <span></span>
              <span></span>
              <span></span>
            </div>

          <section className={`${isOpen ? 'active-menu' : 'mobile-menu'} menu transition-all absolute bg-black p-4 top-full left-0 w-full z-40`}>
            <ul className=" flex flex-col gap-4 text-right font-bold text-lg text-white">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>About</Link></li>
              <li><Link to='/'>Courses</Link></li>
              <li><Link to='/'>Contact</Link></li>
              <li><Link to='/'>Events</Link></li>
            </ul>

          </section>
        
        </nav>
        <Outlet/>
    </div>
  )
}

export default Navbar