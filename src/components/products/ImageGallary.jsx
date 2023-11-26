import React, { useState } from "react";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import image1 from "../../assets/images/image-prod.svg";
import image2 from "../../assets/images/image-prod3.svg";
import image3 from "../../assets/images/image-prod4.svg";
import image4 from "../../assets/images/image-prod5.svg";

const ImageGallery = () => {
  const images = [image1, image2, image3, image4];
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handleImageChange = (idx) => {
    setSelectedIdx(idx);
  };

  const changeImage = (increment) => {
    let newIndex = (selectedIdx + increment + images.length) % images.length;
    setSelectedIdx(newIndex);
  };

  return (
    <section className="select-none">
      <div className="flex gap-2">
        <div className="flex flex-col justify-evenly items-center">
          <TfiAngleUp
            className="cursor-pointer"
            onClick={() => changeImage(1)}
          />
          <div className="flex flex-row md:flex-col gap-2 items-center">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className={`h-14 w-14 cursor-pointer hover:border hover:border-primary hover:rounded-sm ${
                  selectedIdx === idx ? "border border-primary" : ""
                }`}
                alt={`lettuse${idx + 1}`}
                onClick={() => handleImageChange(idx)}
              />
            ))}
          </div>
          <TfiAngleDown
            className="cursor-pointer"
            onClick={() => changeImage(-1)}
          />
        </div>
        <div className="flex-1">
          <img
            src={images[selectedIdx]}
            className="master__img h-[350px] w-[450px]"
            alt={`main-imag-${selectedIdx}`}
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
