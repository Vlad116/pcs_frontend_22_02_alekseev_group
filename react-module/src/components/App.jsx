// import logo from "./logo.svg";
import React, { useState } from "react";

import s from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import Basket from "../pages/basket";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div className={s.root}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product/:id" element={<ProductCard />} />
      </Routes>
      {/* <div className={s.root__wrapper}> */}
      {/* </div> */}
    </div>
  );
}

export default App;
