import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-200">
      <div className="flex justify-between itmes-center mx-auto p-3 max-w-6xl">
        <h1 className="font-bold">
          <Link to="/">MERN AUTH</Link>
        </h1>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
