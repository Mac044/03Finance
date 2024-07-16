import React from 'react'
import { Link } from 'react-router-dom'


const Navbar2 = () => {
  return (
    <div>
      <ul className=' text-center'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <li>Courses</li>
        <li>Contact</li>
        <li>Events</li>
      </ul>
    </div>
  )
}

export default Navbar2
