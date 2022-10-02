// import logo from "./logo.svg";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { nanoid as uniqueId } from "nanoid";

import Main from "../pages/main";
import Basket from "../pages/basket";
import Product from "../pages/product";

import s from "./App.module.scss";

function App() {
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
      <Routes>
        <Route
          path="/"
          element={
            <Main
              selectedProducts={selectedProducts}
              orderSum={orderSum}
              handleRemoveProduct={handleRemoveProduct}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route
          path="/basket"
          element={
            <Basket
              selectedProducts={selectedProducts}
              orderSum={orderSum}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <Product
              selectedProducts={selectedProducts}
              orderSum={orderSum}
              handleRemoveProduct={handleRemoveProduct}
              handleAddProduct={handleAddProduct}
            />
          }
        />
      </Routes>
      {/* <div className={s.root__wrapper}> */}
      {/* </div> */}
    </div>
  );
}

export default App;
