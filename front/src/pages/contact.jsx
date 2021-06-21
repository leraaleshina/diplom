import React from 'react';
import styles from '../css components/contact.module.css';
import vk from '../svg/Vk.svg';
import tg from '../svg/tg.svg';
import inst from '../svg/inst.svg';
import {Header} from '../components/header.js'
import {Question} from '../components/footer_question.js'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Header />
            <div className={styles.background}>
            <div className={styles.contact_wrapper}>
                <h1 className={styles.contact_title}>
                    Контакты
            </h1>
                <div className={styles.contact_info}>
                    <h5 className={styles.info_title}>Контакты</h5>
                    <a href="tel:+7 928-767-87-89" className={styles.contact_tel}>+7 928-767-87-89</a>
                    <a href="tel:+7 928-959-60-61" className={styles.contact_tel}>+7 928-959-60-61</a>
                    <a className={styles.contact_mail} href="mailto:singaservice61@yandex.ru">singaservice61@yandex.ru</a>
                    <div className={styles.ico_link}>
                        <a href="https://vk.com/singaservice" className={styles.contact_ico_link}>
                            <img src={vk} alt="vk" className={styles.contact_ico} />
                        </a>
                        <a href="https://t.me/SingaService" className={styles.contact_ico_link}>
                            <img src={tg} alt="telegramm" className={styles.contact_ico} />
                        </a>
                        <a href="https://www.instagram.com/singa_service/" className={styles.contact_ico_link}>
                            <img src={inst} alt="instagramm" className={styles.contact_ico} />
                        </a>
                    </div>
                </div>
           


            <div className={styles.adress}>
                <p className={styles.adress_name}>Ул. Извилистая 11Б, г. Ростов-на-Дону, Ростовская область</p>
                <p className={styles.adress_name}>Ул. Ю. А. Жданова 18, г. Ростов-на-Дону, Ростовская область</p>
                <p className={styles.adress_name}>Ул. Комарова 10, г. Ростов-на-Дону, Ростовская область</p>
            </div>


            <div className={styles.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2706.279074980961!2d39.69073771558377!3d47.28934567916494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3c8013234d11b%3A0x9be2b835d2ce9ceb!2z0LEt0YAg0JrQvtC80LDRgNC-0LLQsCwgMTAsINCg0L7RgdGC0L7Qsi3QvdCwLdCU0L7QvdGDLCDQoNC-0YHRgtC-0LLRgdC60LDRjyDQvtCx0LsuLCAzNDQwNjQ!5e0!3m2!1sru!2sru!4v1620213259303!5m2!1sru!2sru" className = {styles.adress_map} allowfullscreen="" loading="lazy"></iframe>
            </div>
            </div>
            </div>
            <Question />
        </section>



    )
}

export default Contact;
