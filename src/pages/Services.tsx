import React from "react";
import ProductCard from "../components/ProductCard";
import Herosection from "../components/Herosection";
import Singleproducts from "../components/Singleproducts";
import { FaShoppingBasket, FaStore } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";

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
      {/* our service */}
      <div className=" w-full h-screen flex p-5 justify-center items-center ">
        <div className="w-1/2 h-full flex flex-col justify-evenly p-25">
          <div className="flex gap-5">
            <div className="flex items-center justify-center text-5xl"><FaStore /></div>
            <div>
              <h1 className="text-4xl font-bold">Here by our services</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti facilis aperiam dolore dolores voluptatibus enim quidem
                nostrum sit voluptatum. Doloribus?
              </p>
            </div>
          </div>


          <div className="flex gap-5">
            <div className="flex items-center justify-center text-5xl"><GiFarmer /></div>
            <div>
              <h1 className="text-4xl font-bold">Here by our services</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti facilis aperiam dolore dolores voluptatibus enim quidem
                nostrum sit voluptatum. Doloribus?
              </p>
            </div>
          </div>



          <div className="flex gap-5">
            <div className="flex items-center justify-center text-5xl"><FaShoppingBasket /></div>
            <div>
              <h1 className="text-4xl font-bold">Here by our services</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti facilis aperiam dolore dolores voluptatibus enim quidem
                nostrum sit voluptatum. Doloribus?
              </p>
            </div>
          </div>



        </div>
        <div className="   h-full w-1/2 p-20 place-items-center">
          <div>
            <img src="src\assets\choosingpic.jpeg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
