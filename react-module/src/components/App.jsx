// import logo from "./logo.svg";
import { ReactDOM, useState } from "react";

import Header from "./Header";
import ProductCardList from "./ProductCardList";

import hashCode from "../utils/hashCode";
import s from "./App.module.scss";

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [orderSum, setOrderSum] = useState(0);

  const handleAddProduct = (product) => {
    setOrderSum(orderSum + +product.price);
    const productInOrder = product;
    productInOrder.id = `${product.id}__${hashCode()}`;
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
      <div className={s.root__wrapper}>
        <Header
          selectedProducts={selectedProducts}
          orderSum={orderSum}
          handleRemoveProduct={handleRemoveProduct}
        />
        <ProductCardList handleAddProduct={handleAddProduct} />
      </div>
    </div>
  );
}

export default App;
