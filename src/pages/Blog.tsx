import React from 'react'
import BlogCard from '../components/BlogCard'
// import LoginPage from '../components/LoginPage'
import Herosection from '../components/Herosection'
import Tests from '../components/Tests'


const Blog = () => {
  return (
    <>
     <Herosection
        small="Share your sweet Thought & Knowledge!! "
        header={"Our Blogs !"}
        par={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolores quasi, officiis doloremque sequi numquam ullam. Beatae, excepturi! Aliquam totam blanditiis labore veniam"
        }
 />
      {/* <div className='grid gap-y-10 grid-cols-3 gap-5  place-items-center items-start p-5'>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
  </div> */}
  <div className=' md:columns-4 sm:columns-1 place-items-center space-y-5 mt-5 mb-5'>
  <BlogCard/>
  <BlogCard/>
      <Tests/>
      <Tests/>
      <BlogCard/>
      <Tests/>
      <BlogCard/>
      <Tests/>
      <BlogCard/>
      <BlogCard/>
      <Tests/>
      <Tests/>
      <Tests/>
      <Tests/> 
       <Tests/>
      <Tests/>

  </div>
 
  </>

  )
}

export default Blog