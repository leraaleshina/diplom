import React from 'react';
import styles from '../css components/product.module.css';
import pic1 from '../svg/pic-1.svg';
import heart from '../svg/blue-heart.svg'
import pict2 from '../svg/pic-2.svg';
import pict3 from '../svg/pic-3.svg';
import basket from '../svg/basket-icon.svg'
import { Header } from '../components/header.js'
import { Question } from '../components/footer_question.js'

const Product = () => {
    return (
        <section className={styles.prod}>
            <Header />
            <div className={styles.background}>
            <div className={styles.wrapper}>
                <button className={styles.button}>Вернуться</button>
                <div className={styles.product}>
                    <img src={pic1} alt="" className={styles.picture} />
                    <div className={styles.block_text}>
                        <h5 className={styles.title}>Беспроводная зарядка BH35 Magnetic автомобильный держатель</h5>
                        <p className={styles.description}>
                            BOROFONE BH35 Magnetic автомобильный держатель с беспроводной зарядкой для воздуховода / панели приборов, выход 5W/7.5W/10W/15W
                </p>
                        <span className={styles.price}>2000 рублей</span>
                        <div className={styles.order}>
                            <button className={styles.button_order}>Добавить в корзину</button>
                            <a href="" className="link">
                                <img src={heart} alt="" className={styles.heart} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.same_block}>
                <h2 className={styles.same_title}>
                    Похожие товары
                </h2>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src={pic1} alt="" className={styles.photo}/>
                        <div className={styles.price_block}>
                            <span className={styles.cost}>
                                2000 руб.
                            </span>
                            <a href="" className={styles.link}>
                                <img src={basket} alt="" className={styles.icon}/>
                            </a>
                            <a href="" className={styles.link}>
                                <img src={heart} alt="" className={styles.icon}/>
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src={pic1} alt="" className={styles.photo}/>
                        <div className={styles.price_block}>
                            <span className={styles.cost}>
                                2000 руб.
                            </span>
                            <a href="" className={styles.link}>
                                <img src={basket} alt="" className={styles.icon}/>
                            </a>
                            <a href="" className={styles.link}>
                                <img src={heart} alt="" className={styles.icon}/>
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src={pic1} alt="" className={styles.photo}/>
                        <div className={styles.price_block}>
                            <span className={styles.cost}>
                                2000 руб.
                            </span>
                            <a href="" className={styles.link}>
                                <img src={basket} alt="" className={styles.icon}/>
                            </a>
                            <a href="" className={styles.link}>
                                <img src={heart} alt="" className={styles.icon}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Question />
        </section>
    )
}

export default Product;