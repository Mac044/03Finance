import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";




const Footer = () => {
  return (
    <div className=" lg:bg-slate-100 bg-black">
        <div className=" lg:px-10 lg:flex lg:justify-around text-white lg:text-black pl-8 lg:pl-0 pt-8 pb-8">
         <div>
            <img src="/03finance.jpg" alt="" />
         </div>
         <div>
            <h1 className="lg:text-xl mb-2">QUICK LINKS</h1>
            <ul className=" list-disc">
                <li>About us</li>
                <li>Courses</li>
                <li>Events</li>
                <li>Communities</li>
            </ul>
         </div>
          <div>
            <h1 className=" lg:text-xl mb-2">CONTACT INFO</h1>
            <div className="lg:flex lg:gap-2 flex gap-2">
            <BsTelephoneFill />
            <p>08178624095</p>
            </div>
            <div className="lg:flex lg:gap-2 flex gap-2">
            <IoMdMail />
            <p>03financeschool@gmail.com</p>
            </div>
            <div className="lg:flex lg:gap-2 gap-2 hidden">
            <TbBrandTwitterFilled />
            <p>03financeschool</p>
            </div>
            <div className="lg:flex lg:gap-2 gap-2 hidden">
            <FaInstagram />
            <p>03financeschool</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Footer