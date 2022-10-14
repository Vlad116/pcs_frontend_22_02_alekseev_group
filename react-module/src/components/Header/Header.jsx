import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../features/user/user";

import { ReactComponent as CartIcon } from "../../resource/icons/cart.svg";
import { ReactComponent as BackIcon } from "../../resource/icons/back-arrow.svg";

import s from "./Header.module.scss";
import { useMemo } from "react";

const Header = ({ title, withBackLink, isBasket }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedProducts = useSelector(
    (state) => state.selectedProductList.list
  );
  const productsCount = selectedProducts.length;

  const orderSum = useSelector((state) => state.orderSum.sum);
  const login = useSelector((state) => state.user.login);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const moveBack = () => navigate(-1);

  // товар
  const productsCounterLabel = useMemo(() => {
    let n = productsCount % 100;

    if (n === 0 || (n >= 5 && n <= 20)) {
      return "товаров";
    }

    n %= 10;

    if (n === 1) {
      return "товар";
    } else if (n >= 2 && n <= 4) {
      return "товара";
    }

    return "товаров";
  }, [productsCount]);
  console.log(login);
  // 0 товаров, 1 товар, 2 товара,3,4, 5 товаров - 10, 100, 101 товар, 2,3,4, 105 товаров
  return (
    <header className={s.root}>
      <div className={s.root__inner}>
        {withBackLink && (
          <button
            src={BackIcon}
            className={s.root__header_back}
            onClick={moveBack}
          >
            <BackIcon />
          </button>
        )}
        {title && <h1 className={s.root__title}>{title}</h1>}
        <div className={s.root_cart}>
          <span className={s.root_cart__username}>username: {login}</span>
          {!isBasket && (
            <>
              <p className={s.root_cart__value}>
                {productsCount} {productsCounterLabel} {"\n"}
                на суммму {orderSum} ₽
              </p>
              <Link to={"/basket"} className={s.root_cart__button}>
                <CartIcon />
              </Link>
            </>
          )}
          <button className={s.root__logout} onClick={logoutHandler}>
            Выйти
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  withBackLink: PropTypes.bool,
  isBasket: PropTypes.bool,
};

Header.defaultProps = {
  title: "",
  withBackLink: false,
  isBasket: false,
};

export default Header;
