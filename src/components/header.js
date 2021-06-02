import React from "react";
import logoimage from "../svg/logoimage.svg";
import styles from "../css components/header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.all_header}>
      <div className={styles.header_links}>
        <a href="/" className={styles.header_logo_link}>
          <img src={logoimage} alt="logo" className={styles.logoimage} />
        </a>
        <div className={styles.header_menu}>
          <nav className={styles.header_nav}>
            <ul className={styles.header_list}>
              <li className={styles.header_item}>
                <a href="/catalog" className={styles.header_link}>
                  Товары
                </a>
              </li>
              <li className={styles.header_item}>
                <a href="/service" className={styles.header_link}>
                  Услуги
                </a>
              </li>
              <li className={styles.header_item}>
                <a href="/contact" className={styles.header_link}>
                  Контакты
                </a>
              </li>
              <li className={styles.header_item}>
                <a href="/feedback" className={styles.header_link}>
                  Обратная сявзь
                </a>
              </li>
              <li className={styles.header_item}>
                <a href="/delivery" className={styles.header_link}>
                  Доставка
                </a>
              </li>
            </ul>
          </nav>
          <Link to={"/registration"}>
            {" "}
            <button className={styles.header_button}>Регистрация</button>{" "}
          </Link>
        </div>
      </div>
    </header>
  );
};
