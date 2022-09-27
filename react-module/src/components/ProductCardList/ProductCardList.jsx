import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard";

import { products } from "./static.js";
import s from "./ProductCardList.module.scss";

const ProductCardList = ({ onAddProduct }) => {
  return (
    <div className={s.root}>
      {products.map(({ name, description, img, price, weight, id }) => (
        <ProductCard
          onAddProduct={onAddProduct}
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

ProductCardList.propTypes = {
  onAddProduct: PropTypes.func,
};

export default ProductCardList;
