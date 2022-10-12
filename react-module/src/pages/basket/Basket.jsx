import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import OrderList from "../../components/OrderList";

import BackIcon from "../../resource/icons/back-arrow.svg";

import s from "./Basket.module.scss";

function Basket() {
  const orderSum = useSelector((state) => state.orderSum.sum);

  const navigate = useNavigate();
  const moveBack = () => navigate(-1);

  return (
    <div className={s.root}>
      {/* <div className={s.nr_wrapper}> */}
      <div className={s.root__header}>
        <img
          src={BackIcon}
          className={s.root__header_back}
          onClick={moveBack}
        />
        <h1 className={s.root__header_title}>Корзина с выбранными товарами</h1>
      </div>
      <OrderList />
      {/* </div> */}
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
