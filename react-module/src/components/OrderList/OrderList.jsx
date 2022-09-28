import React from "react";
import PropTypes from "prop-types";

import RemoveIcon from "../../resource/icons/btn-remove.svg";
import s from "./OrderList.module.scss";

const OrderList = ({ selectedProducts, handleRemoveProduct }) => {
  return (
    <div className={s.root}>
      <div className={s.root__wrapper}>
        {selectedProducts.map(({ name, img, price, id }) => (
          <div className={s.root_product} key={id}>
            <img className={s.root_product__img} src={img} alt={name} />{" "}
            <h2 className={s.root_product__title}>{name}</h2>
            <div className={s.root_product__price}>{price}₽</div>
            <button
              className={s.root_product__remove_btn}
              onClick={() => handleRemoveProduct(id, price)}
            >
              <img src={RemoveIcon} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

OrderList.propTypes = {
  selectedProducts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleRemoveProduct: PropTypes.func.isRequired,
};

export default OrderList;
