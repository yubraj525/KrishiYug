// Layout.js
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";

const Layout = () => {
  return (
    <>
<Navbar/>
      <Outlet /> {/* This will render the current page */}
    </>
  );
};

export default Layout;
