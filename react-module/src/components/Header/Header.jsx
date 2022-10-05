import React from "react";
import { useSelector } from "react-redux";

import s from "./Header.module.scss";
import CartIcon from "../../resource/icons/cart.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const selectedProducts = useSelector(
    (state) => state.selectedProductList.list
  );
  const orderSum = useSelector((state) => state.selectedProductList.orderSum);

  return (
    <header className={s.root}>
      <div className={s.root__inner}>
        <h1 className={s.root__title}>наша продукция</h1>
        <div className={s.root_cart}>
          <p className={s.root_cart__value}>
            {selectedProducts.length} товар {"\n"}
            на суммму {orderSum} ₽
          </p>
          <Link to={"/basket"} className={s.root_cart__button}>
            <img className={s.root_cart__icon} src={CartIcon} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
