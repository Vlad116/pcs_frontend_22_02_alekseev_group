import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import OrderList from "../../components/OrderList";

import s from "./Basket.module.scss";
import Header from "../../components/Header";

function Basket() {
  const orderSum = useSelector((state) => state.orderSum.sum);

  const navigate = useNavigate();

  return (
    <div className={s.root}>
      {/* <div className={s.nr_wrapper}> */}
      <Header title={"Корзина с выбранными товарами"} withBackLink isBasket />
      <OrderList />
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
