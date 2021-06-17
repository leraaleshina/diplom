import React from 'react';
import styles from '../css components/first_page.module.css';
import  First_header from '../components/header_f.js'
import { Footer } from '../components/footer.js'
import { Link } from 'react-router-dom'


const FirstPage = () => {
    return (
        <section className="first_block">
            <First_header />
            <div className={styles.cards}>
                <div className={styles.card}>
                    <h3 className={styles.title}>
                    Наши товары
                    </h3>
                    <p className={styles.description}>
                    В нашем интернет магазине Вы сможете заказать различные аксессуары для вашего устройства, чехлы, а так же переферийные устройства.
                     Мы осуществляем доставку по городу Ростову-на-Дону, а так же по Ростовской области.
                    </p>
                    <Link to ={'/pages/catalog'}> <button className={styles.button}>Подробнее</button> </Link>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.title_sec}>
                    Наши услуги
                    </h3>
                    <p className={styles.description}>
                    На нашем сайте Вы сможете записаться на различные услуги по ремонту своей техники, от ремонта телефона до настройки сервера. 
                    Вам больше не нужно стоять в очередях, мы запишем Вас онлайн, а Вы прийдете в назначенное, удобное Вам время.
                    </p>
                    <Link to ={'/'}> <button className={styles.button}>Подробнее</button> </Link>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default FirstPage;