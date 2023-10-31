import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiChat1, CiUser } from "react-icons/ci";
import { PiBowlFoodThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import blog1 from "../../assets/images/news-1.jpg";
import blog2 from "../../assets/images/news-2.jpg";
import blog3 from "../../assets/images/news-3.jpg";
import { Subtitle } from "../../components";

const HomeBlogContainer = () => {
  return (
    <section className="mb-10">
      <div className="container">
        <Subtitle title="Latest News" routeName="/blog" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="col-span-1 shadow-lg transition-transform hover:scale-105">
            <div className="relative">
              <p className="absolute bottom-4 left-4 rounded-sm bg-gray-200  font-medium text-center w-10 h-10">
                18{" "}
                <span className="text-gray-400 uppercase block text-xs">
                  nov
                </span>
              </p>
              <img src={blog1} className="w-full" alt="news__one" />
            </div>
            <div className="py-3 px-4 w-full">
              <div className="flex items-center gap-4 text-xs text-gray-500 capitalize">
                <p className="flex items-center gap-1">
                  <PiBowlFoodThin />
                  food
                </p>
                <p className="flex items-center gap-1">
                  <CiUser />
                  by admin
                </p>
                <p className="flex items-center gap-1">
                  <CiChat1 />
                  56 comment
                </p>
              </div>
              <p className="pt-3 pb-4 font-medium transition-colors hover:text-hard-primary">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </p>
              <Link to="/">
                <button
                  type="button"
                  className="text-primary text-sm capitalize flex justify-between items-center rounded-full font-medium"
                >
                  read more <BsArrowRight className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
          <div className="col-span-1 shadow-lg transition-transform hover:scale-105">
            <div className="relative">
              <p className="absolute bottom-4 left-4 rounded-sm bg-gray-200  font-medium text-center w-10 h-10">
                18{" "}
                <span className="text-gray-400 uppercase block text-xs">
                  nov
                </span>
              </p>
              <img src={blog2} className="w-full" alt="news__one" />
            </div>
            <div className="py-3 px-4 w-full">
              <div className="flex items-center gap-4 text-xs text-gray-500 capitalize">
                <p className="flex items-center gap-1">
                  <PiBowlFoodThin />
                  food
                </p>
                <p className="flex items-center gap-1">
                  <CiUser />
                  by admin
                </p>
                <p className="flex items-center gap-1">
                  <CiChat1 />
                  56 comment
                </p>
              </div>
              <p className="pt-3 pb-4 font-medium transition-colors hover:text-hard-primary">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </p>
              <Link to="/">
                <button
                  type="button"
                  className="text-primary text-sm capitalize flex justify-between items-center rounded-full font-medium"
                >
                  read more <BsArrowRight className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
          <div className="col-span-1 shadow-lg transition-transform hover:scale-105">
            <div className="relative">
              <p className="absolute bottom-4 left-4 rounded-sm bg-gray-200  font-medium text-center w-10 h-10">
                18{" "}
                <span className="text-gray-400 uppercase block text-xs">
                  nov
                </span>
              </p>
              <img src={blog3} className="w-full" alt="news__one" />
            </div>
            <div className="py-3 px-4 w-full">
              <div className="flex items-center gap-4 text-xs text-gray-500 capitalize">
                <p className="flex items-center gap-1">
                  <PiBowlFoodThin />
                  food
                </p>
                <p className="flex items-center gap-1">
                  <CiUser />
                  by admin
                </p>
                <p className="flex items-center gap-1">
                  <CiChat1 />
                  56 comment
                </p>
              </div>
              <p className="pt-3 pb-4 font-medium transition-colors hover:text-hard-primary">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </p>
              <Link to="/">
                <button
                  type="button"
                  className="text-primary text-sm capitalize flex justify-between items-center rounded-full font-medium"
                >
                  read more <BsArrowRight className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogContainer;
