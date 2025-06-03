import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" flex justify-around p-6 bg-cyan-600 text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product">Product</Link>
      <Link to="/contact">contact</Link>
    </nav>
  );
};

export default Navbar;
