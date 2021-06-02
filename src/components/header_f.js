import React from "react";
import logoimage from "../svg/logoimage.svg";
import styles from "../css components/header_f.module.css";
import { Link } from "react-router-dom";

const FirstHeader = () => {
  return (
    <header className={styles.header_first}>
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
                <a href="#" className={styles.header_link}>
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

      <div className={styles.second_block}>
        <div className={styles.text_block}>
          <span className={styles.text_item}>Чехлы</span>
          <span className={styles.text_item}>Аксессуары</span>
          <span className={styles.text_item}>Периферийные устройства </span>
          <p className={styles.description}>
            Закажите аксессуары для вашего телефона у нас и получите скидку на
            первый заказ 10%
          </p>
        </div>
        <Link to={"/registration"}>
          {" "}
          <button className={styles.button}>Начать покупки</button>{" "}
        </Link>
      </div>
    </header>
  );
};

export default FirstHeader;
