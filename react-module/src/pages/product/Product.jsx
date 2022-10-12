import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import { products } from "../../components/ProductCardList/static";
import ProductContent from "../../components/ProductContent/ProductContent";

import s from "./Product.module.scss";

const Product = () => {
  let { id: productId } = useParams();

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    img: "",
    price: 0,
    weight: "",
  });

  useEffect(() => {
    const product = products.find((value) => {
      console.log(value);
      return value.id === productId;
    });

    product.price = +product.price;

    setProductData(product);
  }, []);

  const { name, description, img, price, weight } = productData;

  return (
    <div className={s.root}>
      <Header />
      <ProductContent
        {...{
          productId,
          name,
          description,
          img,
          price,
          weight,
        }}
      />
    </div>
  );
};

export default Product;
