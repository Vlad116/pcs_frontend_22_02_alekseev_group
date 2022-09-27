import React from "react";
import PropTypes from "prop-types";

import RemoveIcon from "../../resource/icons/btn-remove.svg";
import s from "./OrderList.module.scss";

const OrderList = ({ selectedProducts, onRemoveFromCart }) => {
  return (
    <div className={s.root}>
      {selectedProducts.map(({ name, description, img, price, weight, id }) => (
        <div className={s.order_product}>
          <img className={s.order_product__img} src={img} alt={name} />{" "}
          <h2 className={s.order_product__title}>{name}</h2>
          <div className={s.order_product__price}>{price}₽</div>
          <button
            className={s.order_product__delete_btn}
            onClick={onRemoveFromCart}
          >
            <img src={RemoveIcon} />
          </button>
        </div>
      ))}
    </div>
  );
};

OrderList.propTypes = {
  selectedProducts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default OrderList;
