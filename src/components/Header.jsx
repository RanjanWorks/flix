import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full p-4 px-5 border-b-1 bg-opacity-50 backdrop-blur-md shadow-md border-b border-gray-800 z-10  py-3 flex items-center justify-between">
        <h1 className="text-slate-50 text-xl font-serif">
          Ranjan's{" "}
          <span className="bg-yellow-400 px-2 rounded-sm text-yellow-950">
            Flix
          </span>
        </h1>
        <div className="text-yellow-400 px-2 py-1 bg-gray-900 rounded-md">
         <NavLink  to="/">Home</NavLink>
        </div>

      </div>

    </>
  );
};

export default Header;
