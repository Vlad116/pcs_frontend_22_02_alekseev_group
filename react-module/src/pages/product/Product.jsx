import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";

import Header from "../../components/Header";

import BackIcon from "../../resource/icons/back-arrow.svg";
import { ReactComponent as BtnAddIcon } from "../../resource/icons/btn-add.svg";

import { products } from "../../components/ProductCardList/static";
import s from "./Product.module.scss";

const Product = ({
  selectedProducts,
  orderSum,
  handleRemoveProduct,
  handleAddProduct,
}) => {
  let { id: productId } = useParams();

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

  console.log(productData);

  const { name, description, img, price, weight } = productData;

  return (
    <div className={s.root}>
      <Link to={"/"} className={s.root__header_back}>
        <img src={BackIcon} />
      </Link>
      <Header
        selectedProducts={selectedProducts}
        orderSum={orderSum}
        handleRemoveProduct={handleRemoveProduct}
      />
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
              onClick={() =>
                handleAddProduct({
                  productId,
                  name,
                  description,
                  img,
                  price,
                  weight,
                })
              }
            >
              <BtnAddIcon />
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

// class ProductCard extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="product-card">
//         <img src={cardImage} />
//         <h2 className="product-card__title">title</h2>
//         <p className="product-card__description">description</p>
//         <div>
//           <div className="product-card-footer__pricetag">
//             {price} /{" "}
//             <span className="product-card-footer__pricetag-weight">
//               {weight}
//             </span>
//           </div>
//           <button className="product-card-footer__add-btn">
//             <BtnAddIcon />
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

Product.propTypes = {
  handleAddProduct: PropTypes.func.isRequired,
};

export default Product;
