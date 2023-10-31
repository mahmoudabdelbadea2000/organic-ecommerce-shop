import React from "react";
import { PiInstagramLogoLight } from "react-icons/pi";
import social1 from "../../assets/images/Instagram Post (1).jpg";
import social2 from "../../assets/images/Instagram Post (2).jpg";
import social3 from "../../assets/images/Instagram Post (3).jpg";
import social4 from "../../assets/images/Instagram Post (4).jpg";
import social5 from "../../assets/images/Instagram Post (5).jpg";
import social6 from "../../assets/images/Instagram Post (6).jpg";

const SocialMediaSection = () => {
  const imgArray = [social1, social2, social3, social4, social5, social6];
  return (
    <section className="my-4">
      <div className="container">
        <h4 className="capitalize font-semibold text-xl sm:text-3xl text-center mt-4">
          Follow us on Instagram
        </h4>
        <div className="grid grid-cols-3 md:grid-cols-6  gap-5 mt-4">
          {imgArray.map((img, idx) => {
            return (
              <div className="relative col-span-1" key={idx}>
                <img src={img} className="w-full" alt="instgram_image" />
                <div className="social__hover">
                  <PiInstagramLogoLight className="text-white text-2xl hidden" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
