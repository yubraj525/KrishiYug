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
      <div className=" relative h-150 space-y-2.5 bg-gray-100 flex flex-col items-center justify-center">

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
