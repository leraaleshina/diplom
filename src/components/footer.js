import React from 'react';
import styles from '../css components/footer.module.css';
import vk from '../svg/Vk.svg';
import tg from '../svg/tg.svg';
import inst from '../svg/inst.svg';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_content}>
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
                        </ul>
                    </nav>
                    <nav className={styles.footer_nav}>
                        <ul className={styles.footer_menu}>
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
                        <a href="tel:+7 928-767-87-89" className={styles.footer_tel}>+7 928-767-87-89</a>
                        <a href="tel:+7 928-959-60-61" className={styles.footer_tel}>+7 928-959-60-61</a>
                        <a className={styles.footer_mail} href="mailto:singaservice61@yandex.ru">singaservice61@yandex.ru</a>
                        <div className={styles.ico_link}>
                            <a href="#" className={styles.footer_ico_link}>
                                <img src={vk} alt="vk" className={styles.footer_ico} />
                            </a>
                            <a href="#" className={styles.footer_ico_link}>
                                <img src={tg} alt="telegramm" className={styles.footer_ico} />
                            </a>
                            <a href="#" className={styles.footer_ico_link}>
                                <img src={inst} alt="instagramm" className={styles.footer_ico} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
