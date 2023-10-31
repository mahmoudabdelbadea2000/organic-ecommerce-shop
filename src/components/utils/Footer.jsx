import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import mobileApp1 from "../../assets/images/App Store.png";
import apple from "../../assets/images/ApplePay.svg";
import Cart from "../../assets/images/Cart.svg";
import Discover from "../../assets/images/Discover.svg";
import mobileApp2 from "../../assets/images/Google Play.png";
import logo from "../../assets/images/Logo-footer.svg";
import Mastercard from "../../assets/images/Mastercard.svg";

const Footer = () => {
  return (
    <footer className="bg-[#191919] bg-footer bg-cover bg-no-repeat text-gray-400 pt-10 pb-4">
      <div className="container">
        <div className="flex justify-evenly gap-3 flex-wrap py-4">
          <div>
            <img src={logo} alt="logo" />
            <p className="max-w-[300px]">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magn.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <BiLogoFacebook className="text-4xl transition-all rounded-full hover:text-white hover:bg-primary cursor-pointer" />
              <AiOutlineTwitter className="text-2xl transition-all rounded-full hover:text-white hover:bg-primary cursor-pointer " />
              <BiLogoPinterestAlt className="text-4xl transition-all rounded-full p-1 hover:text-white hover:bg-primary cursor-pointer " />
              <AiOutlineInstagram className="text-4xl transition-all rounded-full p-1 hover:text-white hover:bg-primary cursor-pointer " />
            </div>
          </div>
          <ul className="mt-3 md:mt-0">
            <li className="capitalize text-white relative after:absolute after:-bottom-2 after:left-0 after:bg-primary after:h-[2px] after:w-[25px] after:rounded-full">
              My account
            </li>
            <li className="mt-6">
              <Link
                to="/"
                className="capitalize transition-all hover:text-white text-sm"
              >
                my account
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/"
                className="capitalize transition-all hover:text-white text-sm"
              >
                Order History
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/"
                className="capitalize transition-all hover:text-white text-sm"
              >
                shoping cart
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="capitalize transition-all hover:text-white text-sm"
              >
                wishList
              </Link>
            </li>
          </ul>
          <ul className="mt-3 md:mt-0">
            <li className="capitalize text-white relative after:absolute after:-bottom-2 after:left-0 after:bg-primary after:h-[2px] after:w-[25px] after:rounded-full">
              helps
            </li>
            <li className="mt-6">
              <Link
                to="/"
                className="capitalize transition-all hover:text-white text-sm"
              >
                Contact
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/"
                className="capitalize transition-all hover:text-white text-sm"
              >
                Faqs
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/"
                className="capitalize transition-all hover:text-white text-sm"
              >
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="capitalize transition-all hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
          <ul className="mt-3 md:mt-0">
            <li className="capitalize text-white relative after:absolute after:-bottom-2 after:left-0 after:bg-primary after:h-[2px] after:w-[25px] after:rounded-full">
              proxy
            </li>
            <li className="mt-6">
              <Link
                to="/"
                className="capitalize transition-all hover:text-white text-sm"
              >
                about
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/"
                className="capitalize transition-all hover:text-white text-sm"
              >
                shop
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/"
                className="capitalize transition-all hover:text-white text-sm"
              >
                product
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="capitalize transition-all hover:text-white text-sm"
              >
                track Order
              </Link>
            </li>
          </ul>
          <div className="mt-3 md:mt-0">
            <p className="capitalize text-white relative after:absolute after:-bottom-2 after:left-0 after:bg-primary after:h-[2px] after:w-[25px] after:rounded-full">
              Download Mobile app
            </p>
            <div className="flex gap-2 mt-6">
              <img src={mobileApp1} alt="mobile app" />
              <img src={mobileApp2} alt="mobile app" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row py-2">
          <p className="text-sm font-extralight mb-2 md:mb-0 text-white">
            Ecobazar eCommerce 0 2021. All Rights Reserved
          </p>
          <div className="flex justify-between items-center gap-2">
            <img src={apple} alt="apply-pay" />
            <img src={Discover} alt="Discover" />
            <img src={Mastercard} alt="Mastercard" />
            <img src={Cart} alt="cart" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
