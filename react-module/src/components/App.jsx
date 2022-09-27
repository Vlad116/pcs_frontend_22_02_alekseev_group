// import logo from "./logo.svg";
import { ReactDOM, useState } from "react";

import Header from "./Header";
import ProductCardList from "./ProductCardList";

import s from "./App.module.scss";

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [orderSum, setOrderSum] = useState(0);

  const addProduct = (product) => {
    setOrderSum(orderSum + +product.price);
    setSelectedProducts([...selectedProducts, product]);
  };

  console.log(selectedProducts);

  return (
    <div className={s.root}>
      <div className={s.root__wrapper}>
        <Header selectedProducts={selectedProducts} orderSum={orderSum} />
        <ProductCardList onAddProduct={addProduct} />
      </div>
    </div>
  );
}

export default App;
