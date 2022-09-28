import React from "react";
import PropTypes, { shape } from "prop-types";
import Modal from "@mui/material/Modal";

// import ProductCard from "../ProductCard";
import OrderList from "../OrderList";

import CartIcon from "../../resource/icons/cart.svg";
import BackIcon from "../../resource/icons/back-arrow.svg";

import s from "./CartModal.module.scss";

const CartModal = ({ selectedProducts, handleRemoveProduct, orderSum }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <div className={s.modal_root}>
          <div className={s.nr_wrapper}>
            <div className={s.modal_root__header}>
              <button
                className={s.modal_root__header_back}
                onClick={handleClose}
              >
                <img src={BackIcon} />
              </button>
              <h1 className={s.modal_root__header_title}>
                Корзина с выбранными товарами
              </h1>
            </div>
            <OrderList
              selectedProducts={selectedProducts}
              handleRemoveProduct={handleRemoveProduct}
            />
          </div>
          <div className={s.modal_footer}>
            <div className={s.nr_wrapper}>
              <p className={s.modal_footer__text}>
                заказ на суммму:
                <span className={s.modal_footer__order_price}>
                  {orderSum} ₽
                </span>
              </p>
              <button className={s.modal_footer__send_order}>
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

CartModal.propTypes = {
  selectedProducts: PropTypes.arrayOf(shape({})).isRequired,
  handleRemoveProduct: PropTypes.func.isRequired,
  orderSum: PropTypes.number.isRequired,
};

export default CartModal;
