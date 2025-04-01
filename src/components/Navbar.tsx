import React from "react";
import Button from "./Button";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="shadow-xl w-full flex items-center justify-between pl-20 pr-20 ">
      <div className="w-20 h-20">
        <Link to={"/"}>
          {" "}
          <img
            className="w-full h-full "
            alt="image here"
            src="../images/images.png"
          />
        </Link>
      </div>
      <div>
        <ul className="flex items-center flex-row  justify-center gap-15">
          <Link to={"/"}>
            {" "}
            <li>Home</li>
          </Link>
          <Link to={"about"}>
            {" "}
            {/* hover:before:content-['']  */}
            <li className=" ">About Us</li>{" "}
          </Link>
          <Link to={"contact"}>
            {" "}
            <li>Contact Us</li>
          </Link>{" "}
          <Link to={"service"}>
            {" "}
            <li> Our Services</li>
          </Link>
          <Link to={"blogs"}>
            {" "}
            <li> Blogs</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center flex-row  justify-center gap-5">
        <Button  btnName="Sign Up" />
        <Link to={"login"}>
          {" "}
          <h2 className="font-bold">Login</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
