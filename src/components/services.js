import React from "react";
import styles from "../css components/service.module.css";
import server from "../svg/server-serv.svg";
import phone from "../svg/phone_serv.svg";
import tv from "../svg/tv_serv.svg";
import print from "../svg/print-serv.svg";
import notebook from "../svg/nout_serv.svg";

const Services = () => {
  return (
    <div className={styles.cards_wrapper}>
      <div className={styles.card}>
        <a href="" className={styles.link}>
          <img src={phone} alt="" className={styles.picture} />
        </a>
      </div>

      <div className={styles.card}>
        <a href="" className={styles.link}>
          <img src={notebook} alt="" className={styles.picture} />
        </a>
      </div>

      <div className={styles.card}>
        <a href="" className={styles.link}>
          <img src={print} alt="" className={styles.picture} />
        </a>
      </div>

      <div className={styles.card}>
        <a href="" className={styles.link}>
          <img src={server} alt="" className={styles.picture} />
        </a>
      </div>

      <div className={styles.card}>
        <a href="" className={styles.link}>
          <img src={tv} alt="" className={styles.picture} />
        </a>
      </div>
    </div>
  );
};

export default Services;
