import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router'

const Home = () => {
  return (
   <>
 <div className=' h-200 space-y-2.5 bg-gray-100 flex flex-col items-center justify-center'>
  <h1 className=' font-bold text-3xl'>Discover your skills!!</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod </p>
  <Link to={"about"}>
  <button className='w-100 h-10 cursor-pointer border rounded-3xl'>Learn More</button></Link>
 </div>

 <div className=' h-200 space-y-2.5 flex flex-col items-center justify-center'>
  </div>
   </>
  )
}

export default Home