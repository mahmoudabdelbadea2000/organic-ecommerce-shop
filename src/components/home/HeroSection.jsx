import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner1 from "../../assets/images/hero-banner-1.png";
import banner2 from "../../assets/images/hero-banner-2.png";
import banner3 from "../../assets/images/hero-banner-3.png";

const HeroSection = () => {
  return (
    <section className="py-3">
      <div className="container">
        <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
          <div className="relative">
            <img className="max-h-[400px]" src={banner1} alt="banner-1" />
            <div className="absolute top-[50%] left-5 md:left-10 translate-y-[-50%] text-white z-20 max-w-[60%] sm:max-w-[50%]">
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-[600]">
                Fresh & Healthy Organic Food
              </h1>
              <div className="mt-3 sm:mt-5 mb-1 sm:mb-3 ml-3 relative after:absolute after:top-7 after:-left-10 after:rotate-90 after:w-[60px] after:h-[1.5px] after:bg-soft-primary">
                <p>
                  sale up to{" "}
                  <span className="bg-warning ml-3 px-3 py-1 rounded-sm">
                    30% OFF
                  </span>
                </p>
                <p className="text-[12px] font-extralight text-gray-300 mt-2 sm:mt-4">
                  free shipping on all your order.
                </p>
              </div>
              <Link to="/shop">
                <button
                  className="flex justify-between items-center font-medium text-sm px-6 py-2 text-primary bg-white rounded-full mt-4"
                  type="button"
                >
                  shop now <FaLongArrowAltRight className="ml-2" />
                </button>
              </Link>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#00000080] to-transparent rounded-md z-10" />
          </div>
          <div className="flex flex-row md:flex-col gap-5">
            <div className="relative">
              <img className="max-h-[190px]" src={banner2} alt="banner-2" />
              <div className="absolute top-5 left-5">
                <p className="text-[10px] font-medium">
                  SUMMER SALE
                  <span className="block font-semibold text-lg sm:text-2xl">
                    75% OFF
                  </span>
                </p>
                <p className="text-[12px] text-gray-500">
                  only Fruit & vegetable
                </p>
                <Link to="/shop">
                  <button
                    className="flex justify-between items-center font-semibold text-[12px] text-primary mt-1 sm:mt-4"
                    type="button"
                  >
                    shop now <FaLongArrowAltRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img className="max-h-[190px]" src={banner3} alt="banner-3" />
              <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full text-white text-center p-3">
                <span className="text-[10px]">BEST DEAL</span>
                <h2 className="font-bold text-sm sm:text-2xl">
                  Special Products Deal of the Month
                </h2>
                <Link to="/shop">
                  <button
                    className="flex items-center font-semibold text-[12px] text-primary mt-1 sm:mt-4"
                    type="button"
                  >
                    shop now <FaLongArrowAltRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
