import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { add } from "../../features/selectedProductsList/selectedProductsListSlice";

import s from "./ProductContent.module.scss";
import { increase } from "../../features/orderSum/orderSumSlice";

const ProductContent = ({ id, name, description, img, price, weight }) => {
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
    navigate("/basket");
  };

  return (
    <div className={s.root}>
      <img className={s.root__img} src={img} alt={name} />
      <div className={s.root__content}>
        <h2 className={s.root__title}>{name}</h2>
        <p className={s.root__description}>{description}</p>
        <div className={s.footer}>
          <div className={s.footer_pricetag}>
            {price}₽ /{" "}
            <span className={s.footer_pricetag__weight}>{weight} г.</span>
          </div>
          <button
            className={s.footer__add_btn}
            onClick={handleAddToBasketClick}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

ProductContent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};

ProductContent.defaultProps = {
  description: "",
  img: "",
};

export default ProductContent;
