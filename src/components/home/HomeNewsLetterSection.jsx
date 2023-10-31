import React from "react";
import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";

const HomeNewsLetterSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-3">
      <div className="container">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="f">
            <h5 className="font-semibold text-2xl">Subcribe our Newsletter</h5>
            <p className="text-sm font-light text-gray-400 max-w-[450px] mt-2">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="flex-1 flex justify-between items-center flex-col lg:flex-row">
            <form className="text-sm flex-1 my-3 lg:my-0">
              <div className="relative">
                <input
                  className="rounded-s-full pl-5 h-10 w-4/6 border border-gray-200 shadow-md text-gray-500"
                  type="search"
                  placeholder="Search"
                  name="search"
                />
                <button
                  className="rounded-e-full text-white bg-primary px-2 py-[10px] w-2/6"
                  type="submit"
                >
                  search
                </button>
              </div>
            </form>
            <div className="flex justify-between items-center gap-4">
              <BiLogoFacebook className="p-1 w-6 h-6 rounded-full transition-colors hover:text-white hover:bg-hard-primary cursor-pointer " />
              <RiTwitterXFill className="p-1 w-6 h-6 rounded-full transition-colors hover:text-white hover:bg-hard-primary cursor-pointer " />
              <BiLogoPinterestAlt className="p-1 w-6 h-6 rounded-full transition-colors hover:text-white hover:bg-hard-primary cursor-pointer " />
              <SlSocialInstagram className="p-1 w-6 h-6 rounded-full transition-colors hover:text-white hover:bg-hard-primary cursor-pointer " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsLetterSection;
