import React from "react";
import { Subtitle } from "..";
import { categoriesData } from "../../assets/data/constans";

const CategoriesContainer = () => {
  return (
    <section>
      <div className="container">
        <Subtitle
          title="Popular Categories"
          routeName="/categories"
          btnName="view all"
        />
        <div className="grid grid-cols-12 my-4 gap-2">
          {categoriesData.map((category) => {
            return (
              <div
                className="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 flex justify-center items-center flex-col  text-center text-sm py-4 shadow-lg border border-gray-200 rounded-md transition-all hover:text-hard-primary hover:border-hard-primary cursor-pointer"
                key={category.id}
              >
                <img
                  className="w-[150px]"
                  src={category.img}
                  alt={category.title}
                />
                <p className="mt-4 font-medium text-lg">{category.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesContainer;
