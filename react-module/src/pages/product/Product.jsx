import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "../../components/Header";

import { add } from "../../features/selectedProductsList/selectedProductsListSlice";
import { products } from "../../components/ProductCardList/static";
import BackIcon from "../../resource/icons/back-arrow.svg";
import { ReactComponent as BtnAddIcon } from "../../resource/icons/btn-add.svg";

import s from "./Product.module.scss";
import { increase } from "../../features/orderSum/orderSumSlice";

const Product = ({ selectedProducts, orderSum, handleRemoveProduct }) => {
  let { id: productId } = useParams();
  const dispatch = useDispatch();

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    img: "",
    price: 0,
    weight: "",
  });

  useEffect(() => {
    const product = products.find((value) => {
      console.log(value);
      return value.id === productId;
    });
    product.price = +product.price;

    setProductData(product);
  }, []);

  const { name, description, img, price, weight } = productData;

  const handleAddToBasketClick = () => {
    dispatch(
      add({
        productId,
        name,
        description,
        img,
        price,
        weight,
      })
    );
    dispatch(increase(price));
  };

  return (
    <div className={s.root}>
      <Link to={"/"} className={s.root__header_back}>
        <img src={BackIcon} />
      </Link>
      <Header />
      <div className={s.root__wrapper}>
        <>
          <img className={s.root__img} src={img} alt={name} />
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
              <BtnAddIcon />
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Product;
