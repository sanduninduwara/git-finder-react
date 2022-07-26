import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ReactPropTypes } from "react";

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='container  mx-auto'>
        <div className='flex  px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to={"/"} className='text-2xl'>
            {title}
          </Link>
        </div>

        <div className='ml-auto'>
          <Link to={"/"} className='btn btn-ghost btn-sm '>
            Home
          </Link>

          <Link to={"/about"} className='btn btn-ghost btn-sm '>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = { title: "GitFinder" };

export default Navbar;
