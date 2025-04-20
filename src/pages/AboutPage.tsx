import React from "react";
import Herosection from "../components/Herosection";
import Team from "../components/Team";
interface forFeedback{
  image?:string;
}
const team=[
  "src/assets/user-1.avif" ,
  "src/assets/user-6.avif",
  "src/assets/user-2.avif" ,
  "src/assets/user-7.avif" ,
]


const Feedback: React.FC<forFeedback> = ({image}) => {
  return (
    <>
      <div className="  flex flex-col w-110  bg-white  rounded-xl shadow-2xl p-5 gap-5 ">
        <div className="flex items-center w-full  gap-5">
          <div className="w-20 h-20">
            <img
              className="bg-white w-full h-full rounded-full object-cover"
              src={image}
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
      </div>
    </>
  );
};

const AboutPage = () => {
  return (
    <>
      <div className="h-full space-y-2.5 bg-gray-100 ">
        <Herosection
          small="What and Why we are Here??"
          header="About KrishiYug"
          par="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolores quasi, officiis doloremque sequi numquam ullam. Beatae, excepturi! Aliquam totam blanditiis labore veniam
        "
        />

        {/* abou company */}

        <div className="w-full h-100  flex gap-5 items-center justify-center p-5 ">
          <div className="w-1/2 h-full overflow-hidden ">
            <img
              className="size-full object-contain"
              src="src\assets\videos\aboutpic-1.jpeg"
            ></img>
          </div>
          <div className="w-1/2 h-full space-y-2 flex flex-col justify-center p-10 items-center text-center ">
            <h1 className="text-5xl font-bold">Absolute performance</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in
              quo suscipit voluptatum tempore similique architecto fuga
              distinctio? Accusamus, delectus.
            </p>
          </div>
          
        </div>

        <div
          className="w-full h-100   flex flex-row-reverse
     gap-5 items-center justify-center   p-5"
        >
          <div className="w-1/2 h-full overflow-hidden ">
            <img
              className="size-full object-contain rounded"
              src="src\assets\videos\aboutpic-2.jpeg"
            ></img>
          </div>
          <div className="w-1/2 h-full space-y-2 flex flex-col justify-center p-10 items-center text-center ">
            <h1 className="text-5xl font-bold">Absolute performance</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in
              quo suscipit voluptatum tempore similique architecto fuga
              distinctio? Accusamus, delectus.
            </p>
          </div>
        </div>

        <div className="w-full h-100   flex gap-5 items-center justify-center   p-5">
          <div className="w-1/2 h-full overflow-hidden">
            <img
              className="size-full object-contain"
              src="src\assets\videos\aboutpic-3.jpeg"
            ></img>
          </div>
          <div className="w-1/2 h-full space-y-2 flex flex-col justify-center p-10 items-center text-center ">
            <h1 className="text-5xl font-bold">Absolute performance</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in
              quo suscipit voluptatum tempore similique architecto fuga
              distinctio? Accusamus, delectus.
            </p>
          </div>
        </div>

        {/* about the team */}
        <div className="h-150 space-y-2.5 bg-white flex flex-col items-center justify-center ">
          <div className="w-full space-y-4 mt-4 mb-4">
            <h1 className="font-bold text-3xl text-center">Our Team</h1>
            <div className=" w-full grid grid-flow-col  place-items-center ">
        {
          team.map((img,index)=>{
            return(
              <Team  key={index} image={img}></Team>
            )
          })
          
        }
            </div>
          </div>
        </div>
      </div>

      {/* company customer feedback */}
      <div className="bg-gray-100 p-15 ">
        <h1 className="font-bold text-3xl text-center m-5 ">
          What our customer Says
        </h1>
        <div className="grid grid-cols-4 gap-20 place-items-center ">
          <Feedback />
          <Feedback />
          <Feedback />
          <Feedback />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
