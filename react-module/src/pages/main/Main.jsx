import React from "react";
import Header from "../../components/Header";
import ProductCardList from "../../components/ProductCardList";

import s from "./Main.module.scss";

function Main() {
  return (
    <div className={s.root}>
      <Header title={"наша продукция"} />
      <ProductCardList />
    </div>
  );
}

export default Main;
