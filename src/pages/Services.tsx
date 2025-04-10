import React from "react";
import ProductCard from "../components/ProductCard";
import Herosection from "../components/Herosection";
import Singleproducts from "../components/Singleproducts";

const Services = () => {
  return (
    <>
      <Herosection
        small={"What do we offer??"}
        header={"Services of KrishiYug"}
        par={
          "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, harum!"
        }
      />

      <div className="w-full   flex flex-col pl-15  pb-15 pr-15 gap-2 items-center justify-center" >
        <center className="capitalize text-2xl font-bold m-5"> what we provide ?</center>
        <div className=" h-50 bg-gray-100 flex p-10 flex-row items-center justify-start ">
          <img  className="h-full " src="../images/images (2).png" alt=""></img>
        <div>
        <h1 className='capitalize font-bold text-2xl inline-block'>ONE</h1><br/>
        <p> here we provide this!</p>
        </div>
        </div>
        <div className=" h-50 bg-gray-100 flex p-10 flex-row items-center justify-start ">
          <img  className="h-full " src="../images/images (2).png" alt=""></img>
        <div>
        <h1 className='capitalize font-bold text-2xl inline-block'>ONE</h1><br/>
        <p> here we provide this!</p>
        </div>
        </div>
        <div className=" h-50 bg-gray-100 flex p-10 flex-row items-center justify-start ">
          <img  className="h-full " src="../images/images (2).png" alt=""></img>
        <div>
        <h1 className='capitalize font-bold text-2xl inline-block'>ONE</h1><br/>
        <p> here we provide this!</p>
        </div>
        </div>

      </div>
      <Singleproducts/>
    </>
  );
};

export default Services;
