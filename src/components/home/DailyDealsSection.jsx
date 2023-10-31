import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner1 from "../../assets/images/banner-4.png";
import banner2 from "../../assets/images/banner-5.png";
import banner3 from "../../assets/images/banner-6.png";

const DailyDealsSection = () => {
  return (
    <section className="m-7 hidden lg:flex">
      <div className="container">
        <div className="flex justify-between items-center gap-2">
          <div className="relative">
            <div className="absolute top-8 left-0 text-white text-center flex flex-col items-center gap-3 w-full">
              <p className="uppercase text-[12px]">BEST DEALS</p>
              <p className="text-3xl font-bold ">Sale of the Month</p>
              <div>
                <div className="flex justify-evenly items-center gap-7 uppercase mb-1 text-2xl">
                  <span>00</span>
                  <span>:</span>
                  <span>02</span>
                  <span>:</span>
                  <span>18</span>
                  <span>:</span>
                  <span>46</span>
                </div>
                <div className="flex justify-between items-center gap-5 uppercase text-xs font-extralight">
                  <span>days</span>
                  <span>hours</span>
                  <span>mins</span>
                  <span>secs</span>
                </div>
              </div>
              <Link to="/shop">
                <button
                  className="flex justify-between items-center font-medium text-sm px-6 py-2 text-primary bg-white rounded-full"
                  type="button"
                >
                  shop now <FaLongArrowAltRight className="ml-2" />
                </button>
              </Link>
            </div>
            <img src={banner1} alt="banner-1" />
          </div>
          <div className="relative">
            <div className="absolute top-8 left-0 text-white text-center flex flex-col items-center gap-3 w-full">
              <p className="uppercase text-[12px]">85% FAT FREE</p>
              <p className="text-3xl font-bold ">Low-Fat Meat</p>
              <p>
                Started at <span className="text-warning">$79.99</span>
              </p>
              <Link to="/shop">
                <button
                  className="flex justify-between items-center font-medium text-sm px-6 py-2 text-primary bg-white rounded-full"
                  type="button"
                >
                  shop now <FaLongArrowAltRight className="ml-2" />
                </button>
              </Link>
            </div>
            <img src={banner2} alt="banner-2" />
          </div>
          <div className="relative">
            <div className="absolute top-8 left-0 text-white text-center flex flex-col items-center gap-3 w-full">
              <p className="uppercase text-[12px]">SUMMER SALE</p>
              <p className="text-3xl font-bold text-[#1A1A1A]">
                100% Fresh Fruit
              </p>
              <p className="text-[#1A1A1A] font-medium">
                up to
                <span className="bg-[#1A1A1A] py-1 px-2 rounded-sm text-[#FCC900] ml-2 uppercase">
                  64% off
                </span>
              </p>
              <Link to="/shop">
                <button
                  className="flex justify-between items-center font-medium text-sm px-6 py-2 text-primary bg-white rounded-full"
                  type="button"
                >
                  shop now <FaLongArrowAltRight className="ml-2" />
                </button>
              </Link>
            </div>
            <img src={banner3} alt="banner-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyDealsSection;
