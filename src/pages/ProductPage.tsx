import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Herosection from '../components/Herosection'
import axios from 'axios';

interface veggies {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  stock: number;
  description: string;
  image?: string;
}
const ProductPage = () => {
  //  as we have describe what data are coming in usestate
  const [veggies, setVeggies] = useState<veggies[]>([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3000/vegetables")
      .then((response) => {
        setVeggies(response.data); // Store the vegetable data
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((error) => {
        console.error("There was an error fetching vegetables:", error);
        setLoading(false);
      });
      }, []);
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
<div className='w-full grid grid-cols-6 p-15 place-items-center gap-5'>
      {veggies.map((veg) => (
            <ProductCard
              key={veg.id}
              name={veg.name}
              description={veg.description}
              price={veg.price}
              image={veg.image}
            />
          ))}
            
</div>
            </div>
  )
}

export default ProductPage