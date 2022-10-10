import React from "react";
import Header from "../../components/Header";
import ProductCardList from "../../components/ProductCardList";

import s from "./Main.module.scss";

function Main() {
  return (
    <div className={s.root}>
      <Header />
      <ProductCardList />
    </div>
  );
}

export default Main;
