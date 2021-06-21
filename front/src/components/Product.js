import React from "react";
import styles from "../css components/service.module.css";

const Product = ({ priceList }) => {
  return (
    <div>
      {priceList && priceList.map(service => {
        return (
            <div className={styles.name_wrapper}>
              <span className={styles.name_service}>{service[0]}</span>
              <span className={styles.price}>{service[1]}</span>
            </div>
        )
      })}
</div>
  );
};

export default Product;

