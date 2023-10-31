import React from "react";
import partner1 from "../../assets/images/partner (1).svg";
import partner2 from "../../assets/images/partner (2).svg";
import partner3 from "../../assets/images/partner (3).svg";
import partner4 from "../../assets/images/partner (4).svg";
import partner5 from "../../assets/images/partner (5).svg";

const PartnerSection = () => {
  return (
    <section className="my-3">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap gap-4 py-4">
          <img src={partner1} alt="partner" />
          <img src={partner2} alt="partner" />
          <img src={partner3} alt="partner" />
          <img src={partner4} alt="partner" />
          <img src={partner5} alt="partner" />
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
