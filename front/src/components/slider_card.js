import React from "react";
import styles from "../css components/slider.module.css";
function SliderCard({ card }) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url("${card.image}")`,
      }}
    ></div>
  );
}

export default SliderCard;
