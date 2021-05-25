import React from 'react';
import styles from '../css components/delivery.module.css';
import { Header } from '../components/header.js'
import { Footer } from '../components/footer.js'

const Delivery = () => {
    return (
        <section className={styles.delivery_block}>
            <Header />
            <div className={styles.background}>
                <div className={styles.div_delivery}>
                    <h1 className={styles.delivery_title}>
                        Доставка
            </h1>
                    <div className={styles.descr_block}>
                        <h3 className={styles.descr_title}>Доставка в Ростове-на Дону</h3>
                        <div className={styles.delivery_p}>
                            <p className={styles.delivery_descr}>Доставка в пределах города осуществляется с 10:00 до 19:00. </p>
                            <p className={styles.delivery_descr}>Время доставки занимает от 2 до 5 рабочих дней.</p>
                            <p className={styles.delivery_descr}>В день получения заказа с Вами свяжется курьер для соглавсования удобного времени.</p>
                        </div>
                        <div className={styles.delivery_price}>
                            <p className={styles.delivery_descr}>Стоимость доставки по Ростову-на-Дону</p>
                            <p className={styles.delivery_important}>200 рублей</p>
                        </div>
                    </div>

                    <div className={styles.descr_block}>
                        <h3 className={styles.descr_title}>Доставка по Ростовской области</h3>
                        <div className={styles.delivery_p}>
                            <p className={styles.delivery_descr}>Доставка осуществляется в такие города, как Батайск, Таганрог, Кулешовка и Овощной.  </p>
                            <p className={styles.delivery_descr}>Время доставки занимает от 3 до 7 рабочих дней.</p>
                            <p className={styles.delivery_descr}>За день до получения заказа с Вами свяжется курьер для соглавсования удобного времени.</p>
                        </div>
                        <div className={styles.delivery_price}>
                            <p className={styles.delivery_descr}>Стоимость доставки по Ростовской области</p>
                            <p className={styles.delivery_important}>от 200 рублей</p>
                        </div>
                    </div>

                    <div className={styles.descr_block}>
                        <h3 className={styles.descr_title}>Бонусы и акции</h3>
                        <div className={styles.delivery_p}>

                        </div>
                        <div className={styles.delivery_bonus}>
                            <p className={styles.bonus_import}>
                                <span className={styles.bonus_deliv}>При заказе  от</span> 1500 рублей,
                        <span className={styles.bonus_deliv}>доставка по Ростову-на-Дону, Батайску, Кулешовке и Овощному осуществляется </span>
                                <span className={styles.bonus_import}> бесплатно.</span>
                            </p>
                        </div>

                        <div className={styles.delivery_bonus}>
                            <p className={styles.bonus_deliv}>
                                <span className={styles.bonus_import}>При каждом 5 заказе</span> на нашем сайте, доставка по городам осуществляется
                            <span className={styles.bonus_import}> бесплатно.</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Delivery;