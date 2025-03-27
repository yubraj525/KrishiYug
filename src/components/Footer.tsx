import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div  className="shadow-xl bg-gray-100 w-full flex items-center justify-between pl-20 pr-20 ">
        <div>
            <img src="../images/images (2).png" alt="logo here" />
        </div >
        
        <div className="flex flex-col items-center   justify-center">
            <h1  className=' font-bold text-3xl text-center'> KrishiYug</h1>
            <p>here we go with future</p>
        </div>
        <div className='flex flex-col items-center'>
            <h1 >
                social media link
            </h1>
            <ul className="flex items-center   justify-center gap-5">
          <Link to={"/"}>
            {" "}
            <li>Home</li>
          </Link>
          <Link to={"about"}>
            {" "}
            {/* hover:before:content-['']  */}
            <li className=" ">About Us</li>{" "}
          </Link>
          <Link to={"contact"}>
            {" "}
            <li>Contact Us</li>
          </Link>{" "}
          <Link to={"service"}>
            {" "}
            <li> Our Services</li>
          </Link>
        </ul>
        </div>
    </div>
  )
}

export default Footer