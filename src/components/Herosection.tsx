import React from 'react'

const Herosection = ({small,header,par}) => {
  return (
    <div className='space-y-2.5 p-10 bg-gray-100 flex flex-col items-center justify-center '>
    <div className='h-100 space-y-2.5 bg-gray-100 flex flex-col items-center justify-center p-25'>
       <div className='text-center space-y-2'>
         <h4 className='text-xl text-blue-500'>
        {small} 
         </h4>
         <h1  className='text-5xl font-bold '>{header}</h1>
     
      <p  className='w-150'>
{par}      </p>
         </div>
       </div>
       </div>
  )
}

export default Herosection