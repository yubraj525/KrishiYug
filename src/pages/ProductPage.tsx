import React from 'react'
import ProductCard from '../components/ProductCard'
import Herosection from '../components/Herosection'

const ProductPage = () => {
  return (
    <div>
   <Herosection
        small="Feel free to reach us!! "
        header={"Contact For KrishiYug"}
        par={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolores quasi, officiis doloremque sequi numquam ullam. Beatae, excepturi! Aliquam totam blanditiis labore veniam"
        }
      />
<div className='w-full h-15 flex items-center justify-around pl-25 '>
    <div className='w-1/2 '>
        <ul className='flex items-center justify-around'>
            <li>Fruits</li>
            <li>Vegetables</li>
            <li>Leafs</li>
            <li>Beans</li>
            <li>Non-vegetable</li>
        </ul>
    </div>
    <div className='flex items-center justify-center gap-10 '>
        <input type='search' placeholder='search here' className='bg-gray-100 p-2 rounded-xl'></input>
       <button >Search</button>
    </div>
</div>
<div className='w-full grid grid-cols-5 p-15 place-items-center'>
  <ProductCard
            name="heroshoe"
            description={"here you can do something"}
            price={"76$"}
            />
              <ProductCard
            name="heroshoe"
            description={"here you can do something"}
            price={"76$"}
            />
              <ProductCard
            name="heroshoe"
            description={"here you can do something"}
            price={"76$"}
            />
              <ProductCard
            name="heroshoe"
            description={"here you can do something"}
            price={"76$"}
            />
              <ProductCard
            name="heroshoe"
            description={"here you can do something"}
            price={"76$"}
            />
            
</div>
            </div>
  )
}

export default ProductPage