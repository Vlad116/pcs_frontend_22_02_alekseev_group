import React from "react";
import PropTypes, { shape } from "prop-types";

import s from "./Header.module.scss";
import CartIcon from "../../resource/icons/cart.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const { selectedProducts, orderSum } = props;

  // const navigate = useNavigate();

  // const buttonHandler = () => {
  //   navigate("/basket");
  // };

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
          {/* <button className={s.root_cart__button} onClick={buttonHandler}>
            <img className={s.root_cart__icon} src={CartIcon} />
          </button> */}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  selectedProducts: PropTypes.arrayOf(shape({})).isRequired,
  handleRemoveProduct: PropTypes.func.isRequired,
  orderSum: PropTypes.number.isRequired,
};

export default Header;
