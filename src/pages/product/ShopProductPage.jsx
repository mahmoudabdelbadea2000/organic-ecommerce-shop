import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import ReactSlider from "react-slider";
import {
  categoriesData,
  popluarTags,
  productsData,
} from "../../assets/data/constans";
import star5 from "../../assets/images/five-stars.jpg";
import star4 from "../../assets/images/four-stars.jpg";
import star1 from "../../assets/images/ons-star.jpg";
import star3 from "../../assets/images/three-stars.jpg";
import star2 from "../../assets/images/two-stars.jpg";
import {
  FilterationProducts,
  Pagination,
  ProductCard,
  ProductHeader,
} from "../../components";

const ShopProductPage = () => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const catsInfo = categoriesData.slice(0, 8).map((cat) => {
    return (
      <li key={cat.id} className="flex items-center gap-2 relative check__box">
        <input
          type="checkbox"
          className="rounded-full hidden"
          name="friuts"
          id={cat.id}
        />
        <label htmlFor={cat.id}>
          {cat.title}
          <span className="text-gray-400 cursor-pointer">({cat.qty})</span>
        </label>
        <AiFillCheckCircle className="icon__checked absolute top-[50%] left-[1px] -mt-[7px] text-primary hidden" />
      </li>
    );
  });
  const tags = popluarTags.map((tag, idx) => {
    return (
      <span
        className="py-2 px-4 rounded-full cursor-pointer transition-colors hover:text-white hover:bg-primary"
        key={idx}
      >
        {tag}
      </span>
    );
  });

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-7">
          <div className="col-span-7 md:col-span-2 sm:grid md:block sm:grid-cols-2 mt-8">
            <FilterationProducts
              title="All Categories"
              content={<ul className="flex flex-col gap-4">{catsInfo}</ul>}
            />
            <FilterationProducts
              title="Price"
              content={
                <>
                  <ReactSlider
                    className="w-full"
                    thumbClassName="bg-white border-2 border-primary w-5 h-5 -mt-[9px] rounded-full flex justify-center items-center focus:outline-none focus:shadow-outline"
                    trackClassName="track_price h-1 rounded-full bg-gray-300"
                    defaultValue={priceRange}
                    ariaLabel={["Lower thumb", "Upper thumb"]}
                    onChange={(value) => {
                      setPriceRange(value);
                    }}
                    min={0}
                    max={10000}
                    step={100}
                    pearling
                    minDistance={500}
                  />
                  <div className="text-gray-600 mt-5">
                    <p>
                      Price:{" "}
                      <span className="font-bold text-sm">{priceRange[0]}</span>{" "}
                      -{" "}
                      <span className="font-bold text-sm">{priceRange[1]}</span>
                    </p>
                  </div>
                </>
              }
            />
            <FilterationProducts
              title="Rating"
              content={
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-2 relative check__box">
                    <input
                      type="checkbox"
                      className="rounded-full hidden"
                      name="five-stars"
                      id="five-stars"
                    />
                    <label
                      htmlFor="five-stars"
                      className="flex items-center gap-1"
                    >
                      <img src={star1} alt="five-stars" />
                      <span className="text-gray-400 cursor-pointer">5.0</span>
                    </label>
                    <AiFillCheckCircle className="icon__checked absolute top-[50%] left-[1px] -mt-[7px] text-primary hidden" />
                  </li>
                  <li className="flex items-center gap-2 relative check__box">
                    <input
                      type="checkbox"
                      className="rounded-full hidden"
                      name="four-stars"
                      id="four-stars"
                    />
                    <label
                      htmlFor="four-stars"
                      className="flex items-center gap-1"
                    >
                      <img src={star2} alt="four-stars" />
                      <span className="text-gray-400 cursor-pointer">
                        4.0 & up
                      </span>
                    </label>
                    <AiFillCheckCircle className="icon__checked absolute top-[50%] left-[1px] -mt-[7px] text-primary hidden" />
                  </li>
                  <li className="flex items-center gap-2 relative check__box">
                    <input
                      type="checkbox"
                      className="rounded-full hidden"
                      name="three-stars"
                      id="three-stars"
                    />
                    <label
                      htmlFor="three-stars"
                      className="flex items-center gap-1"
                    >
                      <img src={star3} alt="three-stars" />
                      <span className="text-gray-400 cursor-pointer">
                        3.0 & up
                      </span>
                    </label>
                    <AiFillCheckCircle className="icon__checked absolute top-[50%] left-[1px] -mt-[7px] text-primary hidden" />
                  </li>
                  <li className="flex items-center gap-2 relative check__box">
                    <input
                      type="checkbox"
                      className="rounded-full hidden"
                      name="two-stars"
                      id="two-stars"
                    />
                    <label
                      htmlFor="two-stars"
                      className="flex items-center gap-1"
                    >
                      <img src={star4} alt="two-stars" />
                      <span className="text-gray-400 cursor-pointer">
                        2.0 & up
                      </span>
                    </label>
                    <AiFillCheckCircle className="icon__checked absolute top-[50%] left-[1px] -mt-[7px] text-primary hidden" />
                  </li>
                  <li className="flex items-center gap-2 relative check__box">
                    <input
                      type="checkbox"
                      className="rounded-full hidden"
                      name="one-star"
                      id="one-star"
                    />
                    <label
                      htmlFor="one-star"
                      className="flex items-center gap-1"
                    >
                      <img src={star5} alt="one-star" />
                      <span className="text-gray-400 cursor-pointer">
                        1.0 & up
                      </span>
                    </label>
                    <AiFillCheckCircle className="icon__checked absolute top-[50%] left-[1px] -mt-[7px] text-primary hidden" />
                  </li>
                </ul>
              }
            />
            <FilterationProducts
              title="Popular Tag"
              content={
                <div className="flex justify-center flex-wrap gap-3">
                  {tags}
                </div>
              }
            />
          </div>
          <div className="col-span-7 md:col-span-5">
            <ProductHeader />
            <div className="grid  grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-2 my-4">
              {productsData.slice(0, 10).map((prod) => {
                return <ProductCard prod={prod} key={prod.id} />;
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-4">
          <Pagination pageCount={100} onPress={() => {}} />
        </div>
      </div>
    </section>
  );
};

export default ShopProductPage;
