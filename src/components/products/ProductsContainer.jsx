import React from "react";
import { ProductCard, Subtitle } from "..";
import { productsData } from "../../assets/data/constans";

const ProductsContainer = ({ title, routeName, btnName }) => {
  return (
    <section>
      <div className="container">
        <Subtitle title={title} routeName={routeName} btnName={btnName} />
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2 my-4">
          {productsData.slice(0, 10).map((prod) => {
            return <ProductCard prod={prod} key={prod.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsContainer;
