import React from "react";
import ProductCard from "../ProductCard";

import { products } from "./static.js";
import s from "./ProductCardList.module.scss";

const ProductCardList = () => {
  return (
    <div className={s.root}>
      {products.map(({ name, description, img, price, weight, id }) => (
        <ProductCard
          name={name}
          description={description}
          img={img}
          price={price}
          weight={weight}
          id={id}
          key={id}
        />
      ))}
    </div>
  );
};

export default ProductCardList;
