import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as BtnAddIcon } from "../../resource/icons/btn-add.svg";
import s from "./ProductCard.module.scss";
import { useNavigate } from "react-router-dom";

const Product = ({
  id,
  name,
  description,
  img,
  price,
  weight,
  handleAddProduct,
}) => {
  const navigate = useNavigate();

  return (
    <div className={s.root}>
      <img
        className={s.root__img}
        onClick={() => navigate(`/product/${id}`)}
        src={img}
        alt={name}
      />
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
              id,
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  handleAddProduct: PropTypes.func.isRequired,
};

Product.defaultProps = {
  description: "",
  img: "",
};

export default Product;
