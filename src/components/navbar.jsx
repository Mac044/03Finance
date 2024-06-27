import Login from "./loginIn"
import SignIn from "./signIn"


const Navbar = () => {
  return (
    <div>
        <nav className=" lg:flex lg:items-center lg:justify-between lg:gap lg:px-40 lg:py-10">
            <img src="/09/link.jpg" alt="" />
            <ul className=" block lg:flex lg:justify-center lg:gap-7 lg:text-blue-800">
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Contact</li>
                <li>Events</li>
            </ul>
            {/* button */}
            <span className=" block lg:flex lg:gap-3 lg:gap-md lg:justify-end">
                <SignIn/>
                <Login/>
            </span>
        </nav>
    </div>
  )
}

export default Navbar