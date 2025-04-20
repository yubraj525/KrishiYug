import React from 'react'
interface gallery{
    image?:string;
  
}

const GalleryCard :  React.FC<gallery> = ({image}) => {
  return (
    <div className=' w-75  '>
        <img src={image} alt="" className='size-full object-contain' />
    </div>
  )
}

export default GalleryCard