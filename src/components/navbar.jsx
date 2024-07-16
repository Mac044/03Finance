import { useState } from "react";
import Login from "./loginIn"
import SignIn from "./signIn"
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState("Navbar");

  const toggleNavBar = () => {
    setIsOpen("Navabar")
 
  }



  return (
    <div>
        <nav className=" flex justify-between p-2 lg:p-o lg:flex lg:items-center lg:justify-between lg:gap lg:px-40 lg:py-10">
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
            {/* button */}
            <span className=" hidden lg:flex lg:gap-3 lg:gap-md lg:justify-end">
                <div className=" w-0.5 h-11 bg-slate-400"></div>
                <SignIn/>
                <p className=" lg:hidden">/</p>
                <Login/>
            </span>
            <p className=" lg:hidden">{setIsOpen}</p>
            <button className="lg:hidden" onClick={toggleNavBar}>
                 <RxHamburgerMenu/>
            </button>
        </nav>
        <Outlet/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Navbar/>)

export default Navbar