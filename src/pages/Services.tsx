import React from 'react'
import ProductCard from '../components/ProductCard'
import Herosection from '../components/Herosection'

const Services = () => {
  return (
    <>
    <Herosection small={"What do we offer??"} header={"Services of KrishiYug"} par={"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, harum!"}/>
  
   <ProductCard name="heroshoe" description={"here you can do something"} price={"76$"}/>
    </>
  )
}

export default Services