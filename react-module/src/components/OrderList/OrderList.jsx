import React from "react";

import RemoveIcon from "../../resource/icons/btn-remove.svg";
import s from "./OrderList.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../features/selectedProductsList/selectedProductsListSlice";
import { decrease } from "../../features/orderSum/orderSumSlice";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedProducts = useSelector(
    (state) => state.selectedProductList.list
  );

  if (selectedProducts.lenght === 0) return null;

  const handleRemoveFromSelectedClick = (id, price) => {
    dispatch(decrease(price));
    dispatch(remove(id));
  };

  return (
    <div className={s.root}>
      <div className={s.root__wrapper}>
        {selectedProducts.map(({ name, img, price, id }) => (
          <div className={s.root_product} key={id}>
            <img
              onClick={() => navigate(`/product/${id}`)}
              className={s.root_product__img}
              src={img}
              alt={name}
            />{" "}
            <h2
              onClick={() => navigate(`/product/${id}`)}
              className={s.root_product__title}
            >
              {name}
            </h2>
            <div className={s.root_product__price}>{price}₽</div>
            <button
              className={s.root_product__remove_btn}
              onClick={() => handleRemoveFromSelectedClick(id, price)}
            >
              <img src={RemoveIcon} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
