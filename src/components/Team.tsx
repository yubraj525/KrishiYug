import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
interface team{
  image?:string;
}
const Team: React.FC<team> = ({ image }) => {
  return (
    <div className=' flex bg-white p-2 rounded-xl shadow-2xl gap-5'>
       <div className=' w-30 h-30'>
        <img src={image} alt="team" className='size-full rounded-full object-cover'/>
       </div>
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