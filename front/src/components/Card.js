import React from "react";
import styles from "../css components/service.module.css";


const Card = ({ src, onClick }) => {
  return (
    <div onClick={onClick} className={styles.card}>
        <img src={src} alt="" className={styles.picture} />
    </div>
  );
};

export default Card;
