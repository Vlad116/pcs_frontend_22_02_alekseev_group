import React from "react";
import PropTypes, { shape } from "prop-types";
import Modal from "@mui/material/Modal";

// import ProductCard from "../ProductCard";
import OrderList from "../OrderList";

import CartIcon from "../../resource/icons/cart.svg";
import BackIcon from "../../resource/icons/back-arrow.svg";

import s from "./CartModal.module.scss";

const CartModal = ({ selectedProducts, orderSum }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // selectedProducts.reduce((acc, value) => (acc += value.price), 0)
  console.log(selectedProducts);
  console.log(orderSum);
  return (
    <>
      <button className={s.root_cart__button} onClick={handleOpen}>
        <img className={s.root_cart__icon} src={CartIcon} />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={s.modal__root}>
          <div className={s.modal__heder}>
            <button className={s.modal__header_back}>
              <img className={s.root_cart__icon} src={BackIcon} />
            </button>
            <h1 className={s.modal__header_title}>
              Корзина с выбранными товарами
            </h1>
          </div>
          <OrderList
            selectedProducts={selectedProducts}
            onRemoveFromCart={() => {}}
          />
          {/* <div className={s.modal__order_list}>
            {selectedProducts.map(
              ({ name, description, img, price, weight, id }) => (
                <ProductCard
                  onAddProduct={() => {}}
                  name={name}
                  description={description}
                  img={img}
                  price={price}
                  weight={weight}
                  id={id}
                  key={id}
                />
              )
            )}
          </div> */}
          <div className={s.modal_footer}>
            <p className={s.modal_footer__text}>
              заказ на суммму:
              <span className={s.modal_footer__order_price}>{orderSum} ₽</span>
            </p>
            <button className={s.modal__send_order}>Оформить заказ</button>
          </div>
        </div>
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
      </Modal>
    </>
  );
};

CartModal.propTypes = {
  selectedProducts: PropTypes.arrayOf(shape({})).isRequired,
  orderSum: PropTypes.number.isRequired,
};

export default CartModal;
