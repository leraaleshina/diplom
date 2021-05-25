import React from 'react';
import logoimage from '../svg/logoimage.svg';
import styles from '../css components/header_f.module.css';
import { Link } from 'react-router-dom'

export const First_header = () => {
    return(
        <header className={styles.header_first}>
            <div className={styles.header_wrapper}>
                <div className={styles.header_logo}>
                    <a href="/" className={styles.header_logo_link}>
                        <img src={logoimage} alt="logo" className={styles.logoimage} />
                    </a>
                </div>
                <div className={styles.header_menu}>
                    <nav className={styles.header_nav}>
                        <ul className={styles.header_list}>
                            <li className={styles.header_item}>
                                <a href="/pages/catalog" className={styles.header_link}>Товары</a>
                            </li>
                            <li className={styles.header_item}>
                                <a href="#" className={styles.header_link}>Услуги</a>
                            </li>
                            <li className={styles.header_item}>
                                <a href="/pages/contact" className={styles.header_link}>Контакты</a>
                            </li>
                            <li className={styles.header_item}>
                                <a href="#" className={styles.header_link}>Обратная сявзь</a>
                            </li>
                            <li className={styles.header_item}>
                                <a href="/pages/delivery" className={styles.header_link}>Доставка</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Link to ={'/pages/registration'}> <button className={styles.header_button}>Регистрация</button> </Link>
            </div>
            <div className={styles.header_text}>
                <p className={styles.header_content}>Чехлы</p>
                <p className={styles.header_content}>Аксессуары</p>
                <p className={styles.header_content}>Периферийные устройства</p>
                <p className={styles.header_descr}>Закажите аксессуары для вашего телефона у нас и получите скидку на первый заказ 10%</p>
            </div>
            <Link to ={'/pages/persona'}> <button className={styles.text_button}>Начать покупки</button> </Link>
        </header>
    )
}

