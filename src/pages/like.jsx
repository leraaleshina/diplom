import React from "react";
import styles from '../css components/like.module.css';
import pic1 from '../svg/pic-1.svg';
import heart from '../svg/red-heart.svg'
import { Header } from '../components/header.js'
import { Footer } from '../components/footer.js'

const Like = () =>{
    return(
        <section className={styles.basket}>
            <Header />
            <div className={styles.bg}>
                <h1 className={styles.title}>Понравившиеся товары</h1>
                <div className={styles.cards}>
                    <div className={styles.block_links}>
                        <nav>
                            <ul className={styles.block_item}>
                            <li className={styles.item}>
                                    <a href="/basket">
                                    Корзина
                                    </a>
                                </li>
                                <li className={styles.item}>
                                    <a href="/like">
                                    Понравившиеся товары
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={styles.card}>
                        <img src={pic1} alt="" className={styles.image} />
                        <div className={styles.like}>
                        <span className={styles.price}>
                            2300 рублей
                        </span>
                        <img src={heart} alt="" className={styles.image} />
                        </div>
                    </div>

                    
                    <div className={styles.card}>
                        <img src={pic1} alt="" className={styles.image} />
                        <div className={styles.like}>
                        <span className={styles.price}>
                            2300 рублей
                        </span>
                        <img src={heart} alt="" className={styles.image} />
                        </div>
                    </div>

                </div>

                <div className={styles.cards}>
                <div className={styles.card}>
                        <img src={pic1} alt="" className={styles.image} />
                        <div className={styles.like}>
                        <span className={styles.price}>
                            2300 рублей
                        </span>
                        <img src={heart} alt="" className={styles.image} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src={pic1} alt="" className={styles.image} />
                        <div className={styles.like}>
                        <span className={styles.price}>
                            2300 рублей
                        </span>
                        <img src={heart} alt="" className={styles.image} />                       
                        </div>
                    </div>

                    
                    <div className={styles.card}>
                        <img src={pic1} alt="" className={styles.image} />
                        <div className={styles.like}>
                        <span className={styles.price}>
                            2300 рублей
                        </span>
                        <img src={heart} alt="" className={styles.image} />                     
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </section>  
        )
}

export default Like;