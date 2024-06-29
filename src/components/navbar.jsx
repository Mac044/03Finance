import Navbar2 from "../pages/navbar";
import Login from "./loginIn"
import SignIn from "./signIn"
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
        <nav className=" flex justify-between p-2 lg:p-o lg:flex lg:items-center lg:justify-between lg:gap lg:px-40 lg:py-10">
            <img src="/09/link.jpg" alt="" />
            <ul className=" hidden lg:flex lg:justify-center lg:gap-7 lg:text-blue-800">
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Contact</li>
                <li>Events</li>
            </ul>
            {/* button */}
            <span className=" hidden lg:flex lg:gap-3 lg:gap-md lg:justify-end">
                <SignIn/>
                <p className=" lg:hidden">/</p>
                <Login/>
            </span>
            <div className=" lg:hidden">
              <RxHamburgerMenu />
            </div>
        </nav>
    </div>
  )
}

export default Navbar