import React from "react";
import styles from "../css components/registration.module.css";
import { Link } from "react-router-dom";
import desktop from "../svg/desktop.svg";

const Registration = () => {
  return (
    <div className={styles.registration}>
      <section className={styles.reg}>
        <div className={styles.block}>
          <img src={desktop} alt="" className={styles.desktop} />
        </div>
        <div className={styles.block_bg}>
          <div className={styles.block_sec}>
            <Link to={"/"}>
              {" "}
              <button className={styles.button_first}>
                Главная страница
              </button>{" "}
            </Link>
            <div className={styles.links}>
              <a href="/avtorization" className="reg-link">
                <span className={styles.title}>Вход</span>
              </a>
              <a href="" className="reg-link">
                <span className={styles.title_reg}>/Регистрация</span>
              </a>
            </div>
            <div className={styles.form}>
              <input
                className={styles.form_input}
                id={styles.name}
                name={styles.name}
                type={styles.type}
                value={styles.value}
                onChange={styles.handleChange}
                placeholder="Ваше имя"
              />
              <input
                className={styles.form_input}
                id={styles.name}
                name={styles.name}
                type={styles.type}
                value={styles.value}
                onChange={styles.handleChange}
                placeholder="E-mail"
              />
              <input
                className={styles.form_input}
                id={styles.name}
                name={styles.name}
                type="password"
                value={styles.value}
                onChange={styles.handleChange}
                pattern="\d [0-9] [A-Za-z]{6,}"
                placeholder="Придумайте пароль"
              />
              <span className={styles.sms}>
                Минимум 6 символов (букв, цифр и спец. знаков)
              </span>
            </div>
            <Link to={"/"}>
              {" "}
              <button className={styles.button}>Зарегистрироваться</button>{" "}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
