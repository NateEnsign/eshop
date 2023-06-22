import React from "react";
import styles from "./CheckoutProduct.module.css";

const CheckoutProduct = () => {
  return (
    <div className={styles.checkoutProduct}>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
        alt=""
        className={styles.checkoutProduct__image}
      />
      <div className={styles.checkoutProduct__info}>
        <p className={styles.checkoutProduct__title}>lalallalalallalalala</p>
        <p className={styles.checkoutProduct}>
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className={styles.checkoutProduct__rating}>⭐⭐</div>
        <button>Romove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
