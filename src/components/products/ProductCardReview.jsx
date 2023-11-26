import { Fade } from "react-awesome-reveal";
import { createPortal } from "react-dom";
import { AiOutlineHeart } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import brand from "../../assets/images/brand.svg";
import star1 from "../../assets/images/ons-star.jpg";
import ImageGallary from "./ImageGallary";

const ProductCardReview = ({ closeModal }) => {
  const increment = () => {
    const input = document.querySelector('input[type="number"]');
    input.stepUp();
  };
  const decrement = () => {
    const input = document.querySelector('input[type="number"]');
    input.stepDown();
  };

  return (
    <>
      {createPortal(
        <Fade className="fixed top-0 left-0 z-40 w-full h-full hidden md:block">
          <div>
            <div className="flex flex-row gap-2 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] bg-white z-40 p-4">
              <div className="flex-1">
                <ImageGallary />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl lg:text-3xl font-bold">
                    Chinese Cabbage
                  </h2>
                  <span className="text-hard-primary bg-soft-primary py-1 px-2 capitalize text-[10px] rounded-sm h-fit">
                    In stock
                  </span>
                </div>
                <div className="flex gap-5 mt-1 mb-3 text-[11px]">
                  <p className="flex items-center gap-1">
                    <img src={star1} className="h-4" alt="five-stars" />
                    <span className="text-gray-400 cursor-pointer">
                      5 review
                    </span>
                  </p>
                  <p>
                    SKU: <span className="text-gray-400">2,52,524</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-[2px]">
                    <p className="text-gray-400 line-through">$48.00</p>
                    <p className="text-hard-primary">$17.00</p>
                  </div>
                  <p className="text-xs text-red-600">64% Off</p>
                </div>
                <div className="mt-5 mb-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <p className="text-sm">Brand:</p>
                      <img src={brand} alt="brand" />
                    </div>
                    <div className="flex items-center gap-1 flex-col lg:flex-row lg:gap-2 text-gray-600">
                      <span className="text-black text-sm">Share item:</span>
                      <div className="flex ">
                        <FaFacebookF className="cursor-pointer transition-colors hover:text-white hover:bg-primary w-7 h-7 p-2 rounded-full" />
                        <FaTwitter className="cursor-pointer transition-colors hover:text-white hover:bg-primary w-7 h-7 p-2 rounded-full" />
                        <FaPinterestP className="cursor-pointer transition-colors hover:text-white hover:bg-primary w-7 h-7 p-2 rounded-full" />
                        <FaInstagram className="cursor-pointer transition-colors hover:text-white hover:bg-primary w-7 h-7 p-2 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs">
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                    consequat nec, ultrices et ipsum. Nulla varius magna a
                    consequat pulvinar.{" "}
                  </p>
                </div>
                <div className="flex justify-between items-center gap-10">
                  <div className="relative flex items-center">
                    <button
                      type="button"
                      className="absolute left-0 px-3 py-1"
                      onClick={decrement}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className=" pl-8 py-1 text-center w-20"
                      defaultValue="1"
                      min="1"
                    />
                    <button
                      type="button"
                      className="absolute left-[79px] px-3 py-1"
                      onClick={increment}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="w-full text-xs lg:text-base py-2 rounded-full bg-primary text-white cursor-pointer"
                  >
                    Add to Cart
                    <HiOutlineShoppingBag className="inline-flex ml-2" />
                  </button>
                  <AiOutlineHeart className="text-4xl text-hard-primary cursor-pointer " />
                </div>
                <div className="mt-4 text-xs">
                  <p>
                    Category: <span className="text-gray-400">Vegetables</span>
                  </p>
                  <p className="mt-1">
                    Tag:{" "}
                    <span className="text-gray-400">
                      Vegetables Healthy Cabbage Green
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="absolute top-0 left-0 z-30 w-full h-full bg-[#000000b7]"
              onClick={closeModal}
            />
          </div>
        </Fade>,
        document.getElementById("product__modal")
      )}
    </>
  );
};

export default ProductCardReview;
