import React from "react";
import { BsTruck } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { PiPackageDuotone } from "react-icons/pi";

const FeatureSection = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap border-b-[1px] border-gray-200">
          <div className="feature-content">
            <div className="feature-icon-wrapper">
              <BsTruck className="text-3xl text-primary transition-all icon-feture" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-sm sm:text-lg">Free Shipping</p>
              <p className="text-gray-500 text-[10px] sm:text-[12px] mt-2">
                Free shipping with discount
              </p>
            </div>
          </div>
          <div className="feature-content">
            <div className="feature-icon-wrapper">
              <CiHeadphones className="text-3xl text-primary transition-all icon-feture" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-sm sm:text-lg">
                Great Support 24/7
              </p>
              <p className="text-gray-500 text-[10px] sm:text-[12px] mt-2">
                Instant access to Contact
              </p>
            </div>
          </div>
          <div className="feature-content">
            <div className="feature-icon-wrapper">
              <IoBagCheckOutline className="text-3xl text-primary transition-all icon-feture" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-sm sm:text-lg">
                100% Sucure Payment
              </p>
              <p className="text-gray-500 text-[10px] sm:text-[12px] mt-2">
                We ensure your money is save
              </p>
            </div>
          </div>
          <div className="feature-content">
            <div className="feature-icon-wrapper">
              <PiPackageDuotone className="text-3xl text-primary transition-all icon-feture" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-sm sm:text-lg">
                Money-Back Guarantee
              </p>
              <p className="text-gray-500 text-[10px] sm:text-[12px] mt-2">
                30 days money-back
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
