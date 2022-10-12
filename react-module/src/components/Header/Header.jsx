import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../features/user/user";

import CartIcon from "../../resource/icons/cart.svg";
import BackIcon from "../../resource/icons/back-arrow.svg";

import s from "./Header.module.scss";

const Header = ({ title, withBackLink }) => {
  const dispatch = useDispatch();
  const selectedProducts = useSelector(
    (state) => state.selectedProductList.list
  );
  const orderSum = useSelector((state) => state.orderSum.sum);
  const login = useSelector((state) => state.user.login);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const navigate = useNavigate();
  const moveBack = () => navigate(-1);

  console.log(login);

  return (
    <header className={s.root}>
      <div className={s.root__inner}>
        {withBackLink && (
          <img
            src={BackIcon}
            className={s.root__header_back}
            onClick={moveBack}
          />
        )}
        {title && <h1 className={s.root__title}>{title}</h1>}
        <div className={s.root_cart}>
          <span className={s.root_cart__username}>{login}</span>
          <p className={s.root_cart__value}>
            {selectedProducts.length} товар {"\n"}
            на суммму {orderSum} ₽
          </p>
          <Link to={"/basket"} className={s.root_cart__button}>
            <img className={s.root_cart__icon} src={CartIcon} />
          </Link>
          <button className={s.root__logout} onClick={logoutHandler}>
            Выйти
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
