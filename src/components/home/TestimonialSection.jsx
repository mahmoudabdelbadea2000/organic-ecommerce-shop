import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { RxQuote } from "react-icons/rx";
import ReactStars from "react-rating-stars-component";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialSlides } from "../../assets/data/constans";
import Subtitle from "../utils/Subtitle";

const TestimonialSection = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const setting = {
    size: 16,
    count: 5,
    activeColor: "#FF8A00",
    value: 5,
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
    <section className="bg-[#f2f2f2] py-4">
      <div className="container">
        <Subtitle title="Client Testimonials" routeName="/" />
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={25}
          loop={true}
          pagination={{ clickable: true }}
          className="my-10"
        >
          {testimonialSlides.map((slide, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="shadow-lg p-3 bg-white">
                  <RxQuote className="text-soft-primary text-6xl" />
                  <p className="font-extralight text-sm my-4">
                    Pellentesque eu nibh eget mauris congue mattis mattis nec
                    tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                    cursus velit sodales. Donec sed neque eget
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img src={slide.client} alt="client" />
                      <div>
                        <p className="font-medium capitalize">{slide.name}</p>
                        <p className="font-extralight text-xs text-gray-400 capitalize">
                          customer
                        </p>
                      </div>
                    </div>
                    <ReactStars {...setting} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
