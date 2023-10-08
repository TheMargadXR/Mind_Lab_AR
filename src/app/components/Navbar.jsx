"use client";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <div className="flex">
          <h1 className="font-bold text-4xl text-[#0099CC]">Mind </h1>
          <Link href="/">
            <h1 className="font-bold text-4xl text-[#33363B]"> Lab</h1>
          </Link>
        </div>

        <ul className="hidden sm:flex">
          <li className="p-4 text-black ease-in duration-200 hover:text-[#0099CC]">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-black ease-in duration-200 hover:text-[#0099CC]">
            <Link href="/">Learn more</Link>
          </li>
          <li className="p-4 text-black ease-in duration-200 hover:text-[#0099CC]">
            <Link href="/#about">About</Link>
          </li>
          <li className="p-4 text-black ease-in duration-200 hover:text-[#0099CC]">
            <Link href="/team">Team</Link>
          </li>
          <button className="p-4  text-black bg-[#0099CC] ease-in duration-200  rounded-md  hover:bg-[#003366] hover:text-white">
            <Link href="/enroll">EnRoll Now</Link>
          </button>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/70 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/70 text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-2xl ease-in duration-150 hover:text-[#0099CC]"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl ease-in duration-150 hover:text-[#0099CC]"
            >
              <Link href="/">Learn more</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl ease-in duration-150 hover:text-[#0099CC]"
            >
              <Link href="/#about">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-2xl ease-in duration-150 hover:text-[#0099CC]"
            >
              <Link href="/team">Team</Link>
            </li>
            <button className="p-4 text-black bg-[#0099CC] ease-in duration-200  rounded-md  hover:bg-[#003366] hover:text-white">
              <Link href="/enroll">EnRoll Now</Link>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
