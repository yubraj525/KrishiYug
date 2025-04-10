import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import Team from "../components/Team";

const Home = () => {
  const [products, setProducts] = useState("");
  const fetchProduct = async (req, res) => {
    const respond = await axios.get("");
  };
  return (
    <>
      <div className=" h-150 space-y-2.5 bg-gray-100 flex flex-col items-center justify-center">
        <div className="popuplogin">  <div className='flex flex-col items-center justify-center h-screen'>
         <Link to={"/"}><button className='w-100 h-10 cursor-pointer border rounded-3xl'>Return to Home</button></Link>
         <form className="w-100 h-150 p-6 rounded-lg shadow-lg mx-auto mt-20 flex flex-col   justify-evenly   bg-gray-100 bg-opacity-50">
         <div className='self-center'><h1 className='font-bold text-3xl'>Login Form</h1></div>
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700 ml-2">Name:</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Name here" 
               className="border-b-2 border-gray-400  outline-none w-full p-2"
            />
          </div>
        
          <div>
            <label htmlFor="password" className="block font-medium ml-2 text-gray-700">Password:</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Password here" 
         className="border-b-2 border-gray-400 focus:border-blue-500 outline-none w-full p-2"
            />
          </div></div>
        <h1 className=" font-bold text-3xl">Discover your skills!!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. ishan khatri is iam doing it  call me ot not ins a doing a Nobis quod{" "}
        </p>
        <Link to={"about"}>
          <button className="w-100 h-10 cursor-pointer border rounded-3xl">
            Learn More
          </button>
        </Link>
      </div>

      <div className=" h-200 space-y-2.5 flex flex-col items-center p-5 ">
        <h1 className="font-bold text-3xl   underline">Our Products</h1>
        <div className="grid  grid-cols-6 md:grid-cols-4 gap-5">
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
      <div className="  w-full h-full space-y-2.5 bg-gray-100  p-5">
        <h1 className="font-bold text-3xl   text-center underline">About Us</h1>
        <div className="flex items-center  justify-center mt-5">
          <div className="flex  flex-row justify-between    w-7xl">
            <Team />
            <Team />
            <Team />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
