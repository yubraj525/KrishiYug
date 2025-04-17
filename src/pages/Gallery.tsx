import React from 'react'
import Herosection from '../components/Herosection'
import ProductCard from '../components/ProductCard'
import BlogCard from '../components/BlogCard'
import Tests from '../components/Tests'

const Gallery = () => {
  return (
<div >
<Herosection
    small="Feel free to reach us!! "
    header={"Gallery Section"}
    par={
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolores quasi, officiis doloremque sequi numquam ullam. Beatae, excepturi! Aliquam totam blanditiis labore veniam"
    }
  />
  <div className='w-full bg-white flex items-center justify-center text-center'>
  <div className="w-1/2 flex flex-col gap-5 p-5 ">
          <h1 className="font-bold text-3xl   text-center underline ">
            Gallery
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi
            suscipit ab, necessitatibus non cupiditate dolores voluptate dolore
            minus harum!
          </p>
          
        </div>
  </div>
  <div className=' w-full columns-4 space-y-3 place-items-center p-1 mt-5'>
  <BlogCard/>
  <BlogCard/>
      <Tests/>
      <Tests/>
      <BlogCard/>
      <Tests/>
   
  
  </div>
  <div className='w-full p-10 items-center flex justify-center'>

  <button className="cursor-pointer underline text-blue-400 ">
            view more
          </button>
  </div>
</div>
  )
}

export default Gallery