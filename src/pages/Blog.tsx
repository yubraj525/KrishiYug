import React from 'react'
import BlogCard from '../components/BlogCard'

const Blog = () => {
  return (
 
      <div className='grid gap-y-10 grid-cols-3 gap-5  place-items-center'>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
  </div>
  )
}

export default Blog