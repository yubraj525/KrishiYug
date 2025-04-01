import React from 'react'
import Herosection from '../components/Herosection'
import Team from '../components/Team'

const AboutPage = () => {
  return (
   

   
    <div className='h-full space-y-2.5 bg-gray-100 '>
    <Herosection small="What and Why we are Here??" header="Aboout KrishiYug" par="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolores quasi, officiis doloremque sequi numquam ullam. Beatae, excepturi! Aliquam totam blanditiis labore veniam
     "/>
    <div className='h-150 space-y-2.5 bg-white flex flex-col items-center justify-center p-25'>
    <div className="w-full space-y-4 mt-4 mb-4">
        <h1 className="font-bold text-5xl text-center">Our Team</h1>
        <div className=" w-full grid grid-flow-col gap-10 place-items-center m-5">
        <Team/>
            <Team />
            <Team />
        </div>
      </div>
    </div>
    </div>
    
   
  )
}

export default AboutPage