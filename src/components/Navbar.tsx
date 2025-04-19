import React, { useState } from "react";
import { Link } from "react-router";
import LoginPage from "./LoginPage";
import { FaLongArrowAltRight } from "react-icons/fa";
import SignUpPage from "./SignUpPage";
import Button from "./Button";

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  return (
    <div className="shadow-xl w-full flex items-center justify-between pl-20 pr-20 ">
      <div className="w-20 h-15">
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
        <ul className=" w-full flex items-center flex-row  justify-center gap-15">
          <li className="group relative list-none">
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
            <p className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></p>
          </li>
          {/* hover:before:content-['']  */}
          <li className="group relative list-none">
            <Link to={"about"}> About Us</Link>
            <p className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></p>
          </li>{" "}
          <li className="group relative list-none">
            <Link to={"contact"}> Contact Us</Link>{" "}
            <p className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></p>
          </li>
          <li className="group relative list-none">
            <Link to={"service"}> Our Services</Link>
            <p className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></p>
          </li>
          <li className="group relative list-none">
            <Link to={"blogs"}> Blogs</Link>
            <p className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></p>
          </li>
        </ul>
      </div>
      <div className="flex items-center flex-row  justify-end gap-5">
        <Button>
          hello
        </Button>
        {signup && <SignUpPage onclose={() => setSignup(false)} />}

        <div className="flex items-center gap-3">
          <button
            className="cursor-pointer"
            onClick={() => setLogin(true)} // Corrected event handler name
          >
            Login{" "}
          </button>
          <FaLongArrowAltRight />
          {login && <LoginPage onclose={() => setLogin(false)} />}{" "}
          {/* Conditionally render Loginpage based on login state */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
