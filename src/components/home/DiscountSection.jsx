import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner from "../../assets/images/Discount Bannar.jpg";

const DiscountSection = () => {
  return (
    <section className="mb-4">
      <div className="container">
        <div className="relative">
          <div className="absolute top-[50%] right-0 z-20 translate-y-[-50%] text-white flex items-center sm:items-stretch flex-col gap-1 lg:gap-4 w-full sm:max-w-[60%] p-4">
            <p className="text-xs font-medium uppercase">SUMMER SALE</p>
            <p className="uppercase text-xl md:text-5xl">
              <span className="text-warning">37%</span> OFF
            </p>
            <p className="text-xs md:text-sm text-gray-400 hidden sm:block sm:max-w-[80%]">
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </p>
            <Link to="/shop">
              <button
                className="flex justify-between items-center font-medium text-sm px-6 py-1 sm:py-2 text-white bg-primary rounded-full"
                type="button"
              >
                shop now <FaLongArrowAltRight className="ml-2" />
              </button>
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000099] z-10 rounded-md" />
          <img className="w-full" src={banner} alt="discount-banner" />
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
