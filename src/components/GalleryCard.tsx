import React from 'react'
interface gallery{
    image?:string;
  
}

const GalleryCard :  React.FC<gallery> = ({image}) => {
  return (
    <div className=' w-75 h-75 p-5 rounded-2xl overflow-hidden '>
        <img src={image} alt="" className='size-full object-cover' />
    </div>
  )
}

export default GalleryCard