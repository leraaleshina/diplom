import React from "react";
import { Link } from "react-router-dom";
import styles from "../css components/service.module.css";

const ServicesDetail = () => {
  return (
    <div className={styles.buttons}>
      <Link to={"/"}>
        {" "}
        <button className={styles.var_button}>Iphone</button>{" "}
      </Link>
      <Link to={"/"}>
        {" "}
        <button className={styles.var_button}>Android</button>{" "}
      </Link>
    </div>
  );
};

export default ServicesDetail;
