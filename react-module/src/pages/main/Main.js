import React, { useState } from "react";
import { nanoid as uniqueId } from "nanoid";

import Header from "../../components/Header";
import ProductCardList from "../../components/ProductCardList";

import s from "./Main.module.scss";

function Main({
  selectedProducts,
  orderSum,
  handleRemoveProduct,
  handleAddProduct,
}) {
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
