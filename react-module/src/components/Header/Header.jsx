import React from "react";
import PropTypes, { shape } from "prop-types";

import s from "./Header.module.scss";
import CartModal from "../CartModal";

const Header = (props) => {
  const { selectedProducts, orderSum } = props;
  // selectedProducts.reduce((acc, value) => (acc += value.price), 0)
  return (
    <header className={s.root}>
      <div className={s.root__inner}>
        <h1 className={s.root__title}>наша продукция</h1>
        <div className={s.root_cart}>
          <p className={s.root_cart__value}>
            {selectedProducts.length} товар {"\n"}
            на суммму {orderSum} ₽
          </p>
          <CartModal {...props} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  selectedProducts: PropTypes.arrayOf(shape({})).isRequired,
  orderSum: PropTypes.number.isRequired,
};

export default Header;
