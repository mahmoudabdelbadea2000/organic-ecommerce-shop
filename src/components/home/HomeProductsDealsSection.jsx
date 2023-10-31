import React from "react";
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineStar,
} from "react-icons/ai";
import { BsHandbag, BsStarHalf } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { Subtitle } from "..";
import { productsData } from "../../assets/data/constans";

const HomeProductsDealsSection = ({ title, routeName, btnName }) => {
  const setting = {
    size: 16,
    count: 5,
    activeColor: "#FF8A00",
    value: 4,
    edit: false,
    a11y: true,
    isHalf: true,
    emptyIcon: <AiOutlineStar className="text-warning" />,
    halfIcon: <BsStarHalf />,
    filledIcon: <AiFillStar />,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
    },
  };

  return (
    <section>
      <div className="container">
        <Subtitle title={title} routeName={routeName} btnName={btnName} />
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2 my-4">
          {productsData.map((prod) => {
            return (
              prod.saling && (
                <Link to="/" className="product__card" key={prod.id}>
                  <div className="relative">
                    {prod.saling && (
                      <span className="absolute top-2 left-2 bg-danger px-2 py-1 text-white text-[12px] rounded-sm">
                        {prod.saling}
                      </span>
                    )}
                    <img className="" src={prod.img} alt={prod.title} />
                  </div>
                  <div className="flex justify-between items-center mt-4 pl-2 pr-4 self-start capitalize w-full">
                    <div className="flex flex-col gap-1">
                      <p className="text-[12px] text-gray-500 transition-all hover:text-hard-primary mt-3">
                        {prod.title}
                      </p>
                      <p className="font-semibold text-sm">
                        {prod.price}{" "}
                        <span className="font-extralight text-gray-500">
                          {prod.priceAfterDiscount}
                        </span>
                      </p>
                      <ReactStars {...setting} />
                    </div>
                    <div>
                      <div className="flex justify-center items-center w-8 h-8 rounded-full transition-all hover:bg-primary cart__icon-transition">
                        <BsHandbag />
                      </div>
                    </div>
                  </div>
                  <div className="hidden__icons absolute top-4 -right-[100%] transition-all">
                    <AiOutlineHeart className="text-lg bg-white w-8 h-8 p-1 rounded-full mb-2 transition-all hover:text-white hover:bg-primary" />
                    <AiOutlineEye className="text-lg bg-white w-8 h-8 p-1 rounded-full transition-all hover:text-white hover:bg-primary" />
                  </div>
                </Link>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeProductsDealsSection;
