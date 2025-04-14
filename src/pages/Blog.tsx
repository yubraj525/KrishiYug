import React from 'react'
import BlogCard from '../components/BlogCard'
// import LoginPage from '../components/LoginPage'
import Herosection from '../components/Herosection'

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
      <div className='grid gap-y-10 grid-cols-3 gap-5  place-items-center p-5'>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
  </div>
 
  </>

  )
}

export default Blog