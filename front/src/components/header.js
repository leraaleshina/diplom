import React from "react";
import logoimage from "../svg/logoimage.svg";
import styles from "../css components/header.module.css";
import { NavLink as Link } from "react-router-dom";
import { useSelector } from 'react-redux'

export const Header = () => {
  const totalProducts = useSelector(({ basket }) => basket.totalProducts)


  return (
    <header className={styles.all_header}>
      <div className={styles.header_links}>
        <Link to="/" className={styles.header_logo_link}>
          <img src={logoimage} alt="logo" className={styles.logoimage} />
        </Link>
        <div className={styles.header_menu}>
          <nav className={styles.header_nav}>
            <ul className={styles.header_list}>
              <li className={styles.header_item}>
                <Link to="/catalog" className={styles.header_link}>
                  Товары
                </Link>
              </li>
              <li className={styles.header_item}>
                <Link to="/service" className={styles.header_link}>
                  Услуги
                </Link>
              </li>
              <li className={styles.header_item}>
                <Link to="/contact" className={styles.header_link}>
                  Контакты
                </Link>
              </li>
              <li className={styles.header_item}>
                <Link to="/feedback" className={styles.header_link}>
                  Обратная сявзь
                </Link>
              </li>
              <li className={styles.header_item}>
                <Link to="/delivery" className={styles.header_link}>
                  Доставка
                </Link>
              </li>
              <li className={styles.header_item}>
                <Link to="/basket" className={styles.header_link}>
                  Корзина({totalProducts})
                </Link>
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
