import { Header } from '../components/header.js'
import { Question } from '../components/footer_question.js'
import React from 'react';
import styles from '../css components/catalog.module.css';
import pic1 from '../svg/pic-1.svg';
import pic2 from '../svg/pic-2.svg';
import pic3 from '../svg/pic-3.svg';
import basket from '../svg/basket-icon.svg'
import heart from '../svg/red-heart.svg'
import { Link } from 'react-router-dom'

const Catalog = () => {
    return (
        <section className={styles.catalog}>
            <Header />
            <div className={styles.background}>
                <h1 className={styles.title}>Товары</h1>
                <input
                    className={styles.form_input}
                    id={styles.name}
                    name={styles.name}
                    type={styles.type}
                    value={styles.value}
                    onChange={styles.handleChange}
                />
                <div className={styles.block_cards}>
                    <div className={styles.card}>
                        <a href="/pages/products" className={styles.link}>
                            <img src={pic1} alt="" className={styles.pic} />
                        </a>
                        <div className={styles.liked}>
                            <span className={styles.price}>2300 руб.</span>
                            <a href="" className={styles.icon_link}>
                                <img src={basket} alt="product" className={styles.img_icon} />
                            </a>
                            <a href="" className={styles.icon_link}>
                                <img src={heart} alt="product" className={styles.img_icon} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <a href="/pages/products" className={styles.link}>
                            <img src={pic1} alt="" className={styles.pic} />
                        </a>
                        <div className={styles.liked}>
                            <span className={styles.price}>2300 руб.</span>
                            <a href="" className={styles.icon_link}>
                                <img src={basket} alt="product" className={styles.img_icon} />
                            </a>
                            <a href="" className={styles.icon_link}>
                                <img src={heart} alt="product" className={styles.img_icon} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <a href="/pages/products" className={styles.link}>
                            <img src={pic1} alt="" className={styles.pic} />
                        </a>
                        <div className={styles.liked}>
                            <span className={styles.price}>2300 руб.</span>
                            <a href="" className={styles.icon_link}>
                                <img src={basket} alt="product" className={styles.img_icon} />
                            </a>
                            <a href="" className={styles.icon_link}>
                                <img src={heart} alt="product" className={styles.img_icon} />
                            </a>
                        </div>
                    </div>
                </div>


                <div className={styles.block_cards}>
                    <div className={styles.card}>
                        <a href="/pages/products" className={styles.link}>
                            <img src={pic1} alt="" className={styles.pic} />
                        </a>
                        <div className={styles.liked}>
                            <span className={styles.price}>2300 руб.</span>
                            <a href="" className={styles.icon_link}>
                                <img src={basket} alt="product" className={styles.img_icon} />
                            </a>
                            <a href="" className={styles.icon_link}>
                                <img src={heart} alt="product" className={styles.img_icon} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <a href="/pages/products" className={styles.link}>
                            <img src={pic1} alt="" className={styles.pic} />
                        </a>
                        <div className={styles.liked}>
                            <span className={styles.price}>2300 руб.</span>
                            <a href="" className={styles.icon_link}>
                                <img src={basket} alt="product" className={styles.img_icon} />
                            </a>
                            <a href="" className={styles.icon_link}>
                                <img src={heart} alt="product" className={styles.img_icon} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <a href="/pages/products" className={styles.link}>
                            <img src={pic1} alt="" className={styles.pic} />
                        </a>
                        <div className={styles.liked}>
                            <span className={styles.price}>2300 руб.</span>
                            <a href="" className={styles.icon_link}>
                                <img src={basket} alt="product" className={styles.img_icon} />
                            </a>
                            <a href="" className={styles.icon_link}>
                                <img src={heart} alt="product" className={styles.img_icon} />
                            </a>
                        </div>
                    </div>
                </div>



                <div className={styles.block_cards}>
                    <div className={styles.card}>
                        <a href="/pages/products" className={styles.link}>
                            <img src={pic1} alt="" className={styles.pic} />
                        </a>
                        <div className={styles.liked}>
                            <span className={styles.price}>2300 руб.</span>
                            <a href="" className={styles.icon_link}>
                                <img src={basket} alt="product" className={styles.img_icon} />
                            </a>
                            <a href="" className={styles.icon_link}>
                                <img src={heart} alt="product" className={styles.img_icon} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <a href="/pages/products" className={styles.link}>
                            <img src={pic1} alt="" className={styles.pic} />
                        </a>
                        <div className={styles.liked}>
                            <span className={styles.price}>2300 руб.</span>
                            <a href="" className={styles.icon_link}>
                                <img src={basket} alt="product" className={styles.img_icon} />
                            </a>
                            <a href="" className={styles.icon_link}>
                                <img src={heart} alt="product" className={styles.img_icon} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <a href="/pages/products" className={styles.link}>
                            <img src={pic1} alt="" className={styles.pic} />
                        </a>
                        <div className={styles.liked}>
                            <span className={styles.price}>2300 руб.</span>
                            <a href="" className={styles.icon_link}>
                                <img src={basket} alt="product" className={styles.img_icon} />
                            </a>
                            <a href="" className={styles.icon_link}>
                                <img src={heart} alt="product" className={styles.img_icon} />
                            </a>
                        </div>
                    </div>
                </div>
                <Link to ={'/'}> <button className={styles.button}>Показать еще</button> </Link>
            </div>
            <Question />
        </section>

    )
}

export default Catalog;