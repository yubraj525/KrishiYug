import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Team = () => {
  return (
    <div className='h-50   flex w-100 bg-white p-2 rounded-xl shadow-2xl '>
        <div className='flex items-center'><img  className="bg-white w-full h-full rounded-full" src="../images/images (2).png" alt="image here" /></div>
        <div className='flex  flex-col items-center justify-center h-full space-y-2 '>
          <h1 className='capitalize font-bold text-2xl'>
            name here
        </h1>
        <p> agood  person and a man</p>
        <ul className=' w-full flex items center justify-evenly space-x-1 text-2xl'>
            <li><FaFacebook /></li>
            <li><FaLinkedin /></li>
            <li><FaTwitter /></li>
        </ul>
        </div>

    </div>
  )
}

export default Team