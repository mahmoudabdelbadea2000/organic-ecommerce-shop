import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <header>
      <header className="text-sm font-[300] 2xl:text-xl 2xl:font-[400] py-2">
        <div className="container flex flex-col sm:flex-row justify-between items-center">
          <div className="flex justify-between items-center gap-1 cursor-pointer mb-1 md:mb-0">
            <CiLocationOn />
            <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div className="flex gap-2">
              <div className="flex items-center cursor-pointer">
                <span>Eng</span>
                <FaAngleDown />
              </div>
              <div className="flex items-center cursor-pointer">
                <span>USD</span>
                <FaAngleDown />
              </div>
            </div>
            <div className="flex gap-2">
              <Link to="/login">
                <button type="button"> Sign In</button>
              </Link>
              <span>/</span>
              <Link to="/register">
                <button type="button"> Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <header className="py-3">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <form method="get" className="hidden sm:block text-sm">
              <div className="relative">
                <BiSearch className="absolute top-[50%] left-1 translate-y-[-50%] text-2xl text-soft-primary" />
                <input
                  className="rounded-input pl-8 h-10 border border-gray-200 shadow-md text-gray-500"
                  type="search"
                  placeholder="Search"
                  name="search"
                />
                <button
                  className="rounded-btn text-white bg-primary px-2 py-[10px]"
                  type="submit"
                >
                  search
                </button>
              </div>
            </form>
            <div className="flex justify-between items-center gap-1">
              <Link to="/wishlist">
                <AiOutlineHeart className="text-4xl cursor-pointer" />
              </Link>
              <span className="text-gray-400">|</span>
              <div className="flex justify-between items-center gap-1 cursor-pointer">
                <div className="relative">
                  <HiOutlineShoppingBag className="text-4xl mr-4" />
                  <span className="flex justify-center items-center text-[10px] p-3 border absolute -top-1 right-2 bg-hard-primary w-6 h-6 rounded-full text-white">
                    10
                  </span>
                </div>
                <p className="font-extralight hidden md:block  md:text-sm lg:text-base">
                  shopping cart: <br />
                  <span className="font-bold">$57.00</span>
                </p>
              </div>
            </div>
          </div>
          <form
            method="get"
            className="flex justify-center items-center mt-3 sm:hidden text-sm "
          >
            <div className="relative w-full">
              <BiSearch className="absolute top-[50%] left-1 translate-y-[-50%] text-2xl text-soft-primary" />
              <input
                className="rounded-input pl-8 h-10 border border-gray-200 shadow-md text-gray-500 w-5/6"
                type="search"
                placeholder="Search"
                name="search"
              />
              <button
                className="rounded-btn w-1/6 text-white bg-primary px-2 py-[10px]"
                type="submit"
              >
                search
              </button>
            </div>
          </form>
        </div>
      </header>
      <nav className="bg-[#333333] py-3 text-sm font-extralight hidden md:flex">
        <div className="container flex justify-between items-center">
          <ul className="flex justify-between items-center gap-5 text-gray-400">
            <li>
              <NavLink to="/" end>
                <div className="flex justify-between items-center">
                  <span>Home</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                <div className="flex justify-between items-center">
                  <span>Shop</span>
                  <FaAngleDown />
                </div>
              </NavLink>
            </li>
            <li>
              <div className="flex justify-between items-center">
                <span>Pages</span>
                <FaAngleDown />
              </div>
            </li>
            <li>
              <NavLink to="/blog">
                <div className="flex justify-between items-center">
                  <span>Blog</span>
                  <FaAngleDown />
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us">
                <div className="flex justify-between items-center">
                  <span>About US</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">
                <div className="flex justify-between items-center">
                  <span>Contact Us</span>
                </div>
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-2 text-white">
            <FiPhoneCall />
            <span>(219) 555-0114</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
