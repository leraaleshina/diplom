import React from "react";
import styles from "../css components/service.module.css";

const Product = ({ priceList }) => {
  return (
    <>
      <div className={styles.name_wrapper}>
        <span className={styles.name_service}>{priceList[0]}</span>
        <span className={styles.price}>{priceList[1]}</span>
      </div>
    </>
  );
};

export default Product;
