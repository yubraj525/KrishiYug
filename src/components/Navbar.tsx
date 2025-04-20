import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import LoginPage from "./LoginPage";
import { FaLongArrowAltRight } from "react-icons/fa";
import SignUpPage from "./SignUpPage";
import Button from "./Button";

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/service', label: 'Our Services' },
    { to: '/blogs', label: 'Blogs' },
  
  ];
  return (
    <div className="shadow-xl w-full flex items-center justify-between pl-20 pr-20 ">
      <div className="w-20 h-15">
        <Link to={"/"}>
          {" "}
          <img
            className="w-full h-full object-cover"
            alt="image here"
            src="../images/images.png"
          />
        </Link>
      </div>
      <div>
      <ul className="w-full flex items-center flex-row justify-center gap-15">
      {navLinks.map(({ to, label }) => {
        const isActive = currentPath === to;

        return (
          <li key={to} className="group relative list-none">
            <Link to={to} className="cursor-pointer">
              {label}
            </Link>
            <p
              className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></p>
          </li>
        );
      })}
    </ul>
      </div>
      <div className="flex items-center flex-row  justify-end gap-5">
        <Button onClick={()=>setSignup(true)}>
    Sign Up
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
