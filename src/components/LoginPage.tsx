import React from 'react'
import Button from './Button'


const LoginPage = () => {
  return (
    <>


    <div className='fixed inset-0  bg-opacity-50  backdrop-blur-2xl flex flex-col justify-center items-center z-50'>

<form className=" relative w-100 h-150 p-6 rounded-lg shadow-lg mx-auto mt-20 flex flex-col   justify-evenly   bg-gray-100 bg-opacity-50">
<button className='absolute top-0 right-0'>cross</button>
<div className='self-center'><h1 className='font-bold text-3xl'>Login Form</h1></div>
 <div>
   <label htmlFor="name" className="block font-medium text-gray-700 ml-2">Name:</label>
   <input 
     type="text" 
     name="name" 
     placeholder="Name here" 
      className="border-b-2 border-gray-400  outline-none w-full p-2"
   />
 </div>

 <div>
   <label htmlFor="password" className="block font-medium ml-2 text-gray-700">Password:</label>
   <input 
     type="password" 
     name="password" 
     placeholder="Password here" 
className="border-b-2 border-gray-400 focus:border-blue-500 outline-none w-full p-2"
   />
 </div>

 <Button btnName="Submit" />
</form>
    </div>
    </>



  );
};

export default LoginPage