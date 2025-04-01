import React from "react";
import Herosection from "../components/Herosection";

const ContactUs = () => {
  return (
    <div className="space-y-2.5 p-10 bg-gray-100 flex flex-col items-center justify-center ">
      <Herosection
        small="Feel free to reach us!! "
        header={"Contact For KrishiYug"}
        par={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolores quasi, officiis doloremque sequi numquam ullam. Beatae, excepturi! Aliquam totam blanditiis labore veniam"
        }
      />
      <div className=" h-55 w-300 space-y-5 mt-4 mb-4">
        <h1 className="text-3xl font-bold "> Our Offices</h1>
        <div className=" w-300 h-25 grid grid-flow-row grid-cols-4 gap-4 ">
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
      <div className="w-300 space-y-4 mt-4 mb-4">
        <h1 className="font-bold text-3xl">Our Team</h1>
        <div className="  grid grid-flow-col gap-10">
          <div className="h-40 w-70  bg-gray-100 border-2 p-5 rounded-2xl">
            <p>Our CEO</p>
          </div>
          <div className="h-40 w-70  bg-gray-100  border-2 p-5 rounded-2xl">
            <p>Branch Manager</p>
          </div>
          <div className="h-40 w-70 bg-gray-100  border-2 p-5 rounded-2xl">
            <p>Executive Member</p>
          </div>
          <div className="h-40 w-70  bg-gray-100  border-2 p-5 rounded-2xl">
            <p>Member</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 h-screen w-screen flex flex-row items-center">
        <div className="h-full w-1/3 p-15 flex items-center justify-center">
          {" "}
          <div className=" ">
            {" "}
            <h1 className="fond-bold text-3xl">Contact us</h1>
            <p>Here you can fill up the form</p>
          </div>
        </div>
        <div className="p-15 border-l-2" >
          <form className="space-y-3">
            <label htmlFor="uname">Name:</label>
            <br></br>
            <input
              type="text"
              name="fname"
              placeholder="Enter your name here."
            ></input>
            <br />
            <label htmlFor="address">Address:</label>
            <br></br>
            <input
              type="text"
              name="address"
              placeholder="Your address here."
            ></input>
            <br />
            <label htmlFor="email">Email:</label>
            <br></br>
            <input
              type="email"
              name="email"
              placeholder="Your email here."
            ></input>
            <br />
            <label>choose your profession:</label> <br />
            <div className="space-x-2">

            <input  type="checkbox" name="profes1" value={"farmer"}></input>
            <label htmlFor="profes1">Farmer</label>
            <input type="checkbox" name="profes2" value={"consumer"}></input>
            <label htmlFor="profes2">Consumer</label>
            <input type="checkbox" name="profes3" value={"enterpurner"}></input>
            <label htmlFor="profes3">Enterpurner</label>
            <input type="checkbox" name="profes4" value={"grocessor"}></input>

            
            <label htmlFor="profes4">Grocessor</label>
            <input type="checkbox" name="profes5" value={"other"}></input>
            <label htmlFor="profes5">Other</label>
            </div>
            <br />
            <label className="mr-5"> Gender:</label>
            
            <label htmlFor="gender">Male</label>
            <input type="radio" name="gender" value="male" />
            <label htmlFor="gender">female</label>
            <input type="radio" name="gender" value="female" />
            <br />
            <label>Your Qualification:</label>
            <select name="qualification" className="mr-2">
              <option value="SLC">SLC</option>
              <option value="+2">+2 passed</option>
              <option value="Bachelor">bachelor</option>
              <option value="EQ- Bachlore">Eq-Bachelor</option>
              <option value="SEE">SEE</option>
              <option value="Uneducated">illeterate</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
