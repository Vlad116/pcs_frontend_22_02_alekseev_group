import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  add,
  getOrderSum,
} from "../../features/selectedProductsList/selectedProductsListSlice";
import { ReactComponent as BtnAddIcon } from "../../resource/icons/btn-add.svg";

import s from "./ProductCard.module.scss";
import { increase } from "../../features/orderSum/orderSumSlice";

const ProductCard = ({ id, name, description, img, price, weight }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddToBasketClick = () => {
    dispatch(
      add({
        id,
        name,
        description,
        img,
        price,
        weight,
      })
    );
    dispatch(increase(price));
  };

  const handleRedirectToProductPage = () => navigate(`/product/${id}`);

  return (
    <div className={s.root}>
      <img
        className={s.root__img}
        onClick={handleRedirectToProductPage}
        src={img}
        alt={name}
      />
      <h2 className={s.root__title} onClick={handleRedirectToProductPage}>
        {name}
      </h2>
      <p className={s.root__description}>{description}</p>
      <div className={s.footer}>
        <div className={s.footer_pricetag}>
          {price}₽ / <span className={s.footer_pricetag__weight}>{weight}</span>
        </div>
        <button className={s.footer__add_btn} onClick={handleAddToBasketClick}>
          <BtnAddIcon />
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};

ProductCard.defaultProps = {
  description: "",
  img: "",
};

export default ProductCard;
