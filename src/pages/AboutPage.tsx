import React from "react";
import Herosection from "../components/Herosection";
import Team from "../components/Team";
const Feedback=()=>{
  return(
   <>
     <div className="  flex flex-col w-120 bg-white  rounded-xl shadow-2xl p-15 gap-5 ">
      <div className="flex items-center w-full h-15 gap-5">
        <div className="w-20 h-20">
          <img
            className="bg-white w-full h-full rounded-full"
            src="../images/images (2).png"
            alt="image here"
          />
        </div>
        <div>
          <h3 className="font-xl font-bold ">sujan Chapagain</h3>{" "}
          <p className="text-black-100">3 days ago</p>
        </div>
      </div>

      <div>
        <h3 className="font-bold">
          Its a nice start up and good site for a farmer
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et
          iste recusandae ea ipsam? Nobis?
        </p>
      </div>
    </div></>
  );
}

const AboutPage = () => {
 
  return (
    <div className="h-full space-y-2.5 bg-gray-100 ">
      <Herosection
        small="What and Why we are Here??"
        header="About KrishiYug"
        par="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolores quasi, officiis doloremque sequi numquam ullam. Beatae, excepturi! Aliquam totam blanditiis labore veniam
     "
      />
      <div className="h-150 space-y-2.5 bg-white flex flex-col items-center justify-center ">
        <div className="w-full space-y-4 mt-4 mb-4">
          <h1 className="font-bold text-5xl text-center">Our Team</h1>
          <div className=" w-full grid grid-flow-col  place-items-center ">
            <Team />
            <Team />
            <Team />
          </div>
        </div>
      </div>
   <Feedback/>
    </div>
  );
};

export default AboutPage;
