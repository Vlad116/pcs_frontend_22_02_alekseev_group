import React, { useState } from "react";
import { nanoid as uniqueId } from "nanoid";

import Header from "../../components/Header";
import ProductCardList from "../../components/ProductCardList";

import s from "./Main.module.scss";
// {selectedProducts, orderSum, handleRemoveProduct, handleAddProduct}
function Main() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [orderSum, setOrderSum] = useState(0);

  const handleAddProduct = (product) => {
    setOrderSum(orderSum + +product.price);
    const productInOrder = product;
    productInOrder.id = uniqueId();
    setSelectedProducts([...selectedProducts, product]);
  };

  const handleRemoveProduct = (toRemoveId, price) => {
    setOrderSum(orderSum - +price);

    const resultArr = selectedProducts.filter(
      (value) => value.id !== toRemoveId
    );

    setSelectedProducts(resultArr);
  };

  console.log(selectedProducts);
  return (
    <div className={s.root}>
      <Header
        selectedProducts={selectedProducts}
        orderSum={orderSum}
        handleRemoveProduct={handleRemoveProduct}
      />
      <ProductCardList handleAddProduct={handleAddProduct} />
    </div>
  );
}

export default Main;
