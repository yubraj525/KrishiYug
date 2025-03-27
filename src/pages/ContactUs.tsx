import React from 'react'

const ContactUs = () => {
  return (
 <div className='space-y-2.5 p-10 bg-gray-100 flex flex-col items-center justify-center '>
   <div className='h-100 space-y-2.5 bg-gray-100 flex flex-col items-center justify-center p-25'>
      <div className='text-center space-y-2'>
        <h4 className='text-xl'>
       Feel free to reach us!!  
        </h4>
        <h1  className='text-5xl font-bold '>Contact For KrishiYug</h1>
        <p className='w-150'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolores quasi, officiis doloremque sequi numquam ullam. Beatae, excepturi! Aliquam totam blanditiis labore veniam</p>
      </div>
   
    </div>
  <div className=' h-55 w-300 space-y-5 mt-4 mb-4'>
    <h1 className='text-3xl font-bold '> Our Offices</h1>
    <div className=' w-300 h-25 grid grid-flow-row grid-cols-4 gap-4 '>
     <div className=' border-l-2 p-2 space-y-2'><h1 className='font-bold text-2xl'> Itahari</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, est.</p></div>
     <div className=' border-l-2 p-2 space-y-2'><h1 className='font-bold text-2xl'>Biratnagar</h1>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, velit?</p></div>
     <div className=' border-l-2 p-2 space-y-2'><h1 className='font-bold text-2xl'>Jhapa</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, deleniti.</p></div>
     <div className=' border-l-2 p-2 space-y-2'><h1 className='font-bold text-2xl'>Dharan</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequuntur.</p></div>

   
    </div>
  </div>
  <div className='w-300 space-y-4 mt-4 mb-4'>
  <h1 className='font-bold text-3xl'>Our Team</h1>
  <div className='  grid grid-flow-col gap-10'>

    <div className='h-40 w-70  bg-gray-100 border-2 p-5 rounded-2xl'><p>Our CEO</p></div>
    <div className='h-40 w-70  bg-gray-100  border-2 p-5 rounded-2xl'><p>Branch Manager</p></div>
    <div className='h-40 w-70 bg-gray-100  border-2 p-5 rounded-2xl'><p>Executive Member</p></div>
    <div className='h-40 w-70  bg-gray-100  border-2 p-5 rounded-2xl'><p>Member</p></div>
  </div>
  </div>
<div>

</div>
<div className='border-2 w-full h-screen flex flex-col'>
  <div className='h-full bg-red-400 flex flex-col justify-center'>
    <h1 className='font-bold text-3xl'>Contact Form</h1>
    <p>you can fill up form here !</p>
  </div>
<div>
  <form></form>
</div>
</div>
 </div>
  )
}

export default ContactUs