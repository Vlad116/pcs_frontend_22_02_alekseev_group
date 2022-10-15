import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as RemoveIcon } from "../../resource/icons/btn-remove.svg";
import s from "./OrderList.module.scss";

import { remove } from "../../features/selectedProductsList/selectedProductsListSlice";
import { decrease } from "../../features/orderSum/orderSumSlice";

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

  const handleRedirectToProductPage = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className={s.root}>
      <div className={s.root__wrapper}>
        {selectedProducts.map(({ name, img, price, id, productId }) => (
          <div className={s.root_product} key={id}>
            <img
              onClick={() => handleRedirectToProductPage(productId)}
              className={s.root_product__img}
              src={img}
              alt={name}
            />{" "}
            <h2
              onClick={() => handleRedirectToProductPage(productId)}
              className={s.root_product__title}
            >
              {name}
            </h2>
            <div className={s.root_product__price}>{price}₽</div>
            <button
              className={s.root_product__remove_btn}
              onClick={() => handleRemoveFromSelectedClick(id, price)}
            >
              <RemoveIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
