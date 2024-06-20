import Login from "./loginIn"
import SignIn from "./signIn"


const Navbar = () => {
  return (
    <div>
        <nav className="flex items-center justify-between px-40 py-10">
            <img src="/public/09/link.jpg" alt="" />
            <ul className="flex justify-center gap-3">
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Contact</li>
                <li>Events</li>
            </ul>
            {/* button */}
            <div className="flex gap-3 justify-end">
                <SignIn/>
                <Login/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar