import React from "react";
// Import Swiper React components
import { AiFillCheckCircle } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import discount from "../../assets/images/dicount.svg";
import discription from "../../assets/images/discribtion.jpg";
import organic from "../../assets/images/organic.svg";

const AdditinalInfo = () => {
  return (
    <section className="">
      <div className="container">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className=""
        >
          <SwiperSlide>
            <div className="flex justify-between gap-2 flex-col-reverse lg:flex-row text-gray-400 py-4">
              <div className="flex-1 flex flex-col justify-between gap-4 md:gap-0 text-xs pr-9">
                <div>
                  <p>
                    Sed commodo aliquam dui ac porta. Fusce ipsum felis,
                    imperdiet at posuere ac, viverra at mauris. Maecenas
                    tincidunt ligula a sem vestibulum pharetra. Maecenas auctor
                    tortor lacus, nec laoreet nisi porttitor vel. Etiam
                    tincidunt metus vel dui interdum sollicitudin. Mauris sem
                    ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
                    et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
                    scelerisque vitae justo a convallis. Morbi urna ipsum,
                    placerat quis commodo quis, egestas elementum leo. Donec
                    convallis mollis enim. Aliquam id mi quam. Phasellus nec
                    fringilla elit.
                  </p>
                  <p className="mt-3">
                    Nulla mauris tellus, feugiat quis pharetra sed, gravida ac
                    dui. Sed iaculis, metus faucibus elementum tincidunt, turpis
                    mi viverra velit, pellentesque tristique neque mi eget
                    nulla. Proin luctus elementum neque et pharetra.{" "}
                  </p>
                </div>
                <ul>
                  <li>
                    <AiFillCheckCircle className="icon__checked text-primary inline mr-1" />
                    100 g of fresh leaves provides.
                  </li>
                  <li>
                    <AiFillCheckCircle className="icon__checked text-primary inline mr-1" />
                    Aliquam ac est at augue volutpat elementum.
                  </li>
                  <li>
                    <AiFillCheckCircle className="icon__checked text-primary inline mr-1" />
                    Quisque nec enim eget sapien molestie.
                  </li>
                  <li>
                    <AiFillCheckCircle className="icon__checked text-primary inline mr-1" />
                    Proin convallis odio volutpat finibus posuere.
                  </li>
                </ul>
                <p>
                  Cras et diam maximus, accumsan sapien et, sollicitudin velit.
                  Nulla blandit eros non turpis lobortis iaculis at ut massa.
                </p>
              </div>
              <div className="flex flex-col items-center mb-3 md:mt-0">
                <img src={discription} alt="orgainc-food" />
                <div className="flex justify-evenly items-center gap-4 flex-col sm:flex-row mt-7">
                  <div className="flex gap-1">
                    <img src={discount} alt="discount" />
                    <div>
                      <p className="text-black text-sm">64% Discount</p>
                      <span className="text-xs">
                        Save your 64% money with us
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <img src={organic} alt="organic" />
                    <div>
                      <p className="text-black text-sm">100% Organic</p>
                      <span className="text-xs">100% Organic Vegetables</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-between gap-2 flex-col-reverse lg:flex-row py-4">
              <div className="flex-1 flex md:gap-0 text-xs pr-9">
                <div className="flex flex-col gap-3">
                  <p>Weight:</p>
                  <p>Color:</p>
                  <p>Type:</p>
                  <p>Category:</p>
                  <p>Stock Status:</p>
                  <p>Tags:</p>
                </div>
                <div className="flex flex-col gap-3 ml-4 text-gray-400">
                  <p>03</p>
                  <p>Green</p>
                  <p>Organic</p>
                  <p>Vegetables</p>
                  <p>Available (5,413)</p>
                  <p>Vegetables, Healthy, Chinese,</p>
                </div>
              </div>
              <div className="flex flex-col items-center mb-3 md:mt-0">
                <img src={discription} alt="orgainc-food" />
                <div className="flex justify-evenly items-center gap-4 flex-col sm:flex-row mt-7">
                  <div className="flex gap-1">
                    <img src={discount} alt="discount" />
                    <div>
                      <p className="text-black text-sm">64% Discount</p>
                      <span className="text-xs">
                        Save your 64% money with us
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <img src={organic} alt="organic" />
                    <div>
                      <p className="text-black text-sm">100% Organic</p>
                      <span className="text-xs">100% Organic Vegetables</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default AdditinalInfo;
