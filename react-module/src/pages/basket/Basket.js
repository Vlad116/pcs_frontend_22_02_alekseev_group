import React from "react";
import { Link } from "react-router-dom";

import OrderList from "../../components/OrderList";

import BackIcon from "../../resource/icons/back-arrow.svg";

import s from "./Basket.module.scss";

function Basket({ selectedProducts, orderSum, handleRemoveProduct }) {
  return (
    <div className={s.root}>
      <div className={s.nr_wrapper}>
        <div className={s.root__header}>
          <Link to={"/"} className={s.root__header_back}>
            <img src={BackIcon} />
          </Link>
          <h1 className={s.root__header_title}>
            Корзина с выбранными товарами
          </h1>
        </div>
        <OrderList
          selectedProducts={selectedProducts}
          handleRemoveProduct={handleRemoveProduct}
        />
      </div>
      <div className={s.footer}>
        <div className={s.nr_wrapper}>
          <p className={s.footer__text}>
            заказ на суммму:
            <span className={s.footer__order_price}>{orderSum} ₽</span>
          </p>
          <button className={s.footer__send_order}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
