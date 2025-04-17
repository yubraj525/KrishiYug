import { Button } from 'flowbite-react'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { TiSocialGithub } from 'react-icons/ti'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
        <div className="  w-full space-y-2.5   p-5 flex items-center flex-col">
        <div className="w-1/2 flex flex-col gap-5">
          <h1 className="font-bold text-3xl  text-center underline">
      Join Us Now
          </h1>
          <p className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi
            suscipit ab, necessitatibus non cupiditate dolores voluptate dolore
            minus harum!
          </p>
       
        </div >
       <div className="w-1/2 flex gap-15">
       <input className=" bg-gray-100"  type="Email" placeholder="Your email here"/>
       <button className="border p-2 rounded-xl font-bold cursor-pointer">Subscribe</button>

       </div>
    

      </div>
    <div  className="shadow-xl bg-gray-100 w-full flex items-center justify-between pl-20 pr-20 ">
        <div>
            <img src="../images/images (2).png" alt="logo here" />
        </div >
        
        <div className="flex flex-col items-center   justify-center">
            <h1  className=' font-bold text-3xl text-center'> KrishiYug</h1>
            <p>here we go with future</p>
        </div>
        <div className='flex flex-col items-center '>
            <h1 >
                Social media link
            </h1>
            <ul className="flex items-center   justify-center gap-5 text-3xl">
          <Link to={"/"}>
            {" "}
            <li><FaGithub /></li>
          </Link>
          <Link to={"about"}>
            {" "}
            {/* hover:before:content-['']  */}
            <li className=" "><FaYoutube /></li>{" "}
          </Link>
          <Link to={"contact"}>
            {" "}
            <li><FaLinkedin /></li>
          </Link>{" "}
          <Link to={"service"}>
            {" "}
            <li> <FaFacebook/></li>
          </Link>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Footer