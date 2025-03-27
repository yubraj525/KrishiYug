import React from 'react'
import { Link } from 'react-router'

const ProductCard = ({name,description,price}) => {
  return (
    <div className='w-70 h-75 bg-gray-100 flex flex-col text-start rounded-2xl space-y-0.5 m-1 overflow-hidden ' >
    
   
        <div className='overflow-hidden  h-50 bg-red-400'>
        <img className='w-full h-full  '  alt="image Here" src="../images/images.png" />
        </div>
        <div className='overflow-hidden  space-y-0.5'>
        <h1 className='text-2xl font-bold '>Name here</h1>
        <p> description here</p>
       <Link to={"singleproduct"}>
       <p className='text-blue-400 underline'> Know More</p>
       </Link> 

        </div>
    </div>
  )
}

export default ProductCard