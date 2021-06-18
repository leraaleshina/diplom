import React from "react";
import styles from "../css components/footer_question.module.css";
import vk from "../svg/Vk.svg";
import tg from "../svg/tg.svg";
import inst from "../svg/inst.svg";

export const Question = () => {
  return (
    <footer className={styles.question}>
      <div className={styles.question_section}>
        <div className={styles.description}>
          <span className={styles.quest_title}>Остались вопросы?</span>
          <p className={styles.quest_description}>
            Если у вас остались вопросы, оставьте заявку и мы свяжемся с Вами!
          </p>
        </div>
        <div className={styles.form_group}>
          <label htmlFor={styles.name} className="form-label">
            {styles.title}
          </label>
          <input
            className={styles.form_input}
            id={styles.name}
            name={styles.name}
            type={styles.type}
            value={styles.value}
            onChange={styles.handleChange}
            placeholder="ФИО"
          />
          <input
            className={styles.form_input}
            id={styles.name}
            name={styles.name}
            type={styles.type}
            value={styles.value}
            onChange={styles.handleChange}
            placeholder="+7 ___ ___-__-__"
          />

          <button className={styles.request_button}>ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footer_wrapper}>
          <nav className={styles.footer_nav}>
            <ul className={styles.footer_menu}>
              <li className={styles.footer_item}>
                <a href="#" className={styles.footer_link}>
                  Товары
                </a>
              </li>
              <li className={styles.footer_item}>
                <a href="#" className={styles.footer_link}>
                  Услуги
                </a>
              </li>
              <li className={styles.footer_item}>
                <a href="#" className={styles.footer_link}>
                  Доставка
                </a>
              </li>

              <li className={styles.footer_item}>
                <a href="#" className={styles.footer_link}>
                  Контакты
                </a>
              </li>
              <li className={styles.footer_item}>
                <a href="#" className={styles.footer_link}>
                  Обратная связь
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.footer_adress}>
            <a href="tel:+7 928-767-87-89" className={styles.footer_tel}>
              +7 928-767-87-89
            </a>
            <a href="tel:+7 928-959-60-61" className={styles.footer_tel}>
              +7 928-959-60-61
            </a>
            <a
              className={styles.footer_mail}
              href="mailto:singaservice61@yandex.ru"
            >
              singaservice61@yandex.ru
            </a>
            <div className={styles.ico_link}>
              <a href="#" className={styles.footer_ico_link}>
                <img src={vk} alt="vk" className={styles.footer_ico} />
              </a>
              <a href="#" className={styles.footer_ico_link}>
                <img src={tg} alt="telegramm" className={styles.footer_ico} />
              </a>
              <a href="#" className={styles.footer_ico_link}>
                <img
                  src={inst}
                  alt="instagramm"
                  className={styles.footer_ico}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
