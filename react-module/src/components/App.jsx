// import logo from "./logo.svg";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../pages/main";
import Basket from "../pages/basket";
import Product from "../pages/product";

import s from "./App.module.scss";

function App() {
  return (
    <div className={s.root}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
