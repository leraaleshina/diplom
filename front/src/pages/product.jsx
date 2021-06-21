import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import styles from '../css components/product.module.css';
import pic1 from '../svg/pic-1.svg';
import heart from '../svg/blue-heart.svg'
import basket from '../svg/basket-icon.svg'
import { Header } from '../components/header.js'
import { Question } from '../components/footer_question.js'

const Product = () => {
    const [data, setData] = useState([])
    const getProducts = async () => {
        axios.get('http://localhost:5000/api/product/'+window.location.pathname.split("/")[2]).then(data=>setData(data.data))
        }
        useEffect(() => { 
            getProducts()
        }, [])
    return (
        <section className={styles.prod}>
            <Header />
            <div className={styles.background}>
            <div className={styles.wrapper}>
                <button className={styles.button}>Вернуться</button>
                <div className={styles.product}>
                    <img src={data.image} alt="" className={styles.picture} />
                    <div className={styles.block_text}>
                        <h5 className={styles.title}>{data.name_prod}</h5>
                        <p className={styles.description}>
                            {data.desc && data.desc}
                </p>
                        <span className={styles.price}>{data.price && data.price} рублей</span>
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