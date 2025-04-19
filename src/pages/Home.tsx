import React, { useEffect, useState } from "react";
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
  const images = [
    "https://plus.unsplash.com/premium_photo-1678655636569-b2786b3c9ac3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://media.istockphoto.com/id/1249522339/photo/tractor-spray-fertilizer-on-green-field.jpg?s=1024x1024&w=is&k=20&c=i5dKxezXxtgmLZ57juYCe8H7ZZ4w_o1M3HrY0WI_n_Q=",
    "https://media.istockphoto.com/id/2201573634/photo/two-cheerful-female-farmers-carrying-wooden-boxes-full-of-vegetables-in-the-field.jpg?s=2048x2048&w=is&k=20&c=wAcUHUeXa18HEWkIVxBfM42y96_6wtBia_dzpDE6wYo=",
  ];

  const [current, setCurrent] = useState(0);
  const length = images.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [current]);
  return (
    <>
    
       <div className="  w-full  bg-red-400 h-120  overflow-hidden  mx-auto  rounded shadow-lg flex items-center justify-center pb-15">
         
     <div className="w-full  relative">
     <div className="absolute bg-black/60 size-full "/>
     <div className="  absolute inset-0 z-10 space-y-2.5 bg-transparent text-white backdrop-blur-1 flex flex-col items-center justify-center p-5 backdrop-blur-5">
      <div className="backdrop-blur-15 p-5 rounded-2xl flex items-center justify-center">
    <div className="flex items-center justify-center flex-col">
    <h1 className=" font-bold text-3xl ">Discover your skills!!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br/> ishan khatri
          is iam doing it call me ot not ins a doing a Nobis quod{" "}
        </p>
        <Link to={"about"}>
          <button className="w-100 h-10 cursor-pointer border rounded-3xl">
            Learn More
          </button>
        </Link>
    </div>
        
      </div>
      </div>
     <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-center transition-normal duration-1000 ease-linear"
      />
     </div>

      {/* Navigation Buttons */}
   
     

      {/* Dots Indicator */}
      <div className="absolute  top-120 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
     
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
        <div className="1/2 flex flex-col gap-5">
          <h1 className="font-bold text-3xl   text-center underline">
            Gallery
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi
            suscipit ab, necessitatibus non cupiditate dolores voluptate dolore
            minus harum!
          </p>
          <div className="self-center">
            <Link to={"gallery"}>
              <button className=" p-2  cursor-pointer underline text-blue-400">
                view more
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full grid place-items-center  grid-cols-5 p-5 ">
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
      <div className="  w-full h-full space-y-2.5 bg-gray-100  p-5 flex items-center flex-col">
        <div className="w-1/2 flex flex-col gap-5">
          <h1 className="font-bold text-3xl  text-center underline">
            About Us
          </h1>
          <p className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi
            suscipit ab, necessitatibus non cupiditate dolores voluptate dolore
            minus harum!
          </p>
          <button className=" p-2  cursor-pointer underline text-blue-400">
            view more
          </button>
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
