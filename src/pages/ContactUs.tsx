import React from "react";
import Herosection from "../components/Herosection";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <div className="space-y-  bg-gray-100 flex flex-col items-center justify-center ">
      <Herosection
        small="Feel free to reach us!! "
        header={"Contact For KrishiYug"}
        par={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolores quasi, officiis doloremque sequi numquam ullam. Beatae, excepturi! Aliquam totam blanditiis labore veniam"
        }
      />
      <div className="  w-full space-y-10   bg-white p-15">
        <h1 className="text-5xl font-bold text-center "> Our Offices</h1>
        <div className=" w-full  h-25 grid grid-flow-row grid-cols-4  place-items-center">
          <div className=" border-l-2 p-2 space-y-2">
            <h1 className="font-bold text-2xl"> Itahari</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              est.
            </p>
          </div>
          <div className=" border-l-2 p-2 space-y-2">
            <h1 className="font-bold text-2xl">Biratnagar</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
              velit?
            </p>
          </div>
          <div className=" border-l-2 p-2 space-y-2">
            <h1 className="font-bold text-2xl">Jhapa</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              deleniti.
            </p>
          </div>
          <div className=" border-l-2 p-2 space-y-2">
            <h1 className="font-bold text-2xl">Dharan</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              consequuntur.
            </p>
          </div>
        </div>
      </div>
<div className="w-full h-200 bg-white flex items-start justify-evenly">
  <div className="flex items-center  justify-center flex-col w-1/4 h-full "><h1 className="font-bold text-3xl"> Join With Us! </h1>
  <p>filling up this form!</p></div>
  <div className="flex  border-l-2 items-center p-10 justify-center flex-col  h-full ">
    <ContactForm/>
  </div>
</div>
    </div>
  );
};

export default ContactUs;
