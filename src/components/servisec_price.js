import React from "react";
import { Link } from "react-router-dom";
import styles from "../css components/service.module.css";

const ServicesPrice = () => {
  return (
    <div>
      <div>
        <div className={styles.name_wrapper}>
          <span className={styles.name_service}>Ремонт телефона</span>
          <span className={styles.price}>1000 рублей</span>
        </div>

        <div className={styles.name_wrapper}>
          <span className={styles.name_service}>Замена дисплея</span>
          <span className={styles.price}>1000 рублей</span>
        </div>

        <div className={styles.name_wrapper}>
          <span className={styles.name_service}>Замена матери</span>
          <span className={styles.price}>1000 рублей</span>
        </div>

        <div className={styles.name_wrapper}>
          <span className={styles.name_service}>Ремонт телефона</span>
          <span className={styles.price}>1000 рублей</span>
        </div>

        <div className={styles.name_wrapper}>
          <span className={styles.name_service}>Замена дисплея</span>
          <span className={styles.price}>1000 рублей</span>
        </div>

        <div className={styles.name_wrapper}>
          <span className={styles.name_service}>Замена матери</span>
          <span className={styles.price}>1000 рублей</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesPrice;
