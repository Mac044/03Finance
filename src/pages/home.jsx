import Card from "../components/card"
import Navbar from "../components/navbar"
import '../index.css'

const Home = () => {
  return (
    <>
        <div>
        <Navbar/>
       <div className=" w-full h-96 px-40">
       <div className="bg-[url(/10/hero.png.jpg)] w-auto h-96 bg-no-repeat py-96 bg-right-top relative"> </div>
        <div className=" h-32 w-32 rounded-full bg-blue-800 absolute right-40 top-32"></div>
        <div className=" h-7 w-7 rounded-full bg-indigo-400 absolute right-52 top-2/4 mt-16"></div>
        <div className=" h-10 w-10 rounded-full bg-blue-800 absolute top-2/4 mt-32 left-2/4"></div>
        <div className=" h-20 w-20 rounded-full bg-blue-200 absolute top-2/4 left-96 mt-28"></div>
       </div>
       {/* courses stundents and teachers */}
       <div className=" px-48">
       <div className=" w-full h-24 bg-slate-100 mt-36 flex justify-around pt-3">
        <div className="grid grid-rows-3 grid-flow-col gap-2">
          <img className="row-span-3" src="/13/courses.jpg" alt="" />
          <h3 className="col-span-2 text-blue-800">10+</h3>
          <p className="row-span-2">Courses</p>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-2">
          <img className="row-span-3" src="/11/stundents.jpg" alt="" />
          <h3 className="col-span-2 text-blue-800">75+</h3>
          <p className="row-span-2">Students</p>
        </div>
        <div className=" grid grid-rows-3 grid-flow-col gap-2">
          <img className="row-span-3" src="/12/teachers.jpg" alt="" />
          <h3 className="col-span-2 text-blue-800">5+</h3>
          <p className="row-span-2">Teachers</p>
        </div>
       </div>
       </div>
    </div>
    <Card/>
    </>

  )
}

export default Home