import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Subtitle = ({ title, routeName, btnName }) => {
  return (
    <div className="py-2">
      <div className="flex justify-between items-center">
        <h4 className="capitalize font-semibold text-xl sm:text-3xl relative after:absolute after:-bottom-2 after:left-0 after:w-[50%] after:h-[2px] after:bg-hard-primary rounded-full">
          {title}
        </h4>
        {btnName && (
          <Link to={routeName}>
            <button
              type="button"
              className="text-primary text-sm capitalize flex justify-between items-center py-2 px-5 rounded-full font-medium transition-all hover:text-white hover:bg-primary"
            >
              {btnName} <BsArrowRight className="ml-2" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Subtitle;
