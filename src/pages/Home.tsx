import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import Team from "../components/Team";
import LoginPage from "../components/LoginPage";


const Home = () => {
  const [products, setProducts] = useState("");
  const fetchProduct = async (req, res) => {
    const respond = await axios.get("");
  };
  return (
    <>
      <div className="  h-150 space-y-2.5 bg-gray-100 flex flex-col items-center justify-center">

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
<div className=" flex items-center justify-between pl-15 pr-25 m-4  ">
<h1 className="font-bold text-3xl   underline">Our Products</h1>
<Link to={"products"}>
<button className=" p-2  cursor-pointer underline">view more</button>
</Link>
</div>
      <div className="  space-y-2.5 items-center justify-center flex  p-5 ">
      
        <div className="w-full grid place-items-center  grid-cols-5 ">
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
      <div className="  w-full h-full space-y-2.5 bg-gray-100  p-5 flex items-center flex-col">
       <div className="w-130 flex flex-col gap-5">
       <h1 className="font-bold text-3xl   text-center underline">About Us</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi suscipit ab, necessitatibus non cupiditate dolores voluptate dolore minus harum!</p>
       <button className=" p-2  cursor-pointer underline text-blue-400">view more</button>
       </div>
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
