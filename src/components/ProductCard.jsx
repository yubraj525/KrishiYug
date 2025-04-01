import React from 'react'
import { Link } from 'react-router'

const ProductCard = ({name,description,price}) => {
  return (
    <div className='w-60   bg-gray-100 flex flex-col  rounded-xl space-y-0.1 m-1 overflow-hidden text-left ' >
    
   
        <div className='w-full h-50 overflow-hidden bg-red-400'>
        <img className='w-full h-full '  alt="image Here" src="../images/images.png" />
        </div>
        <div className='overflow-hidden pl-2 pb-2 capitalize space-y-0.1 mt-2 mb-2'>
        <h1 className='text-2xl font-bold '>{name}</h1>
        <p> {description}</p>
        <p> {price}</p>
        
       <Link to={"singleproduct/"}>
       <p className='text-blue-400 underline'> Know More</p>
       </Link> 

        </div>
    </div>
  )
}

export default ProductCard