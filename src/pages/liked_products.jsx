import React from "react";
import styles from '../css components/liked_products.module.css';
import pic1 from '../svg/pic-1.svg';
import pic2 from '../svg/pic-2.svg';
import pic3 from '../svg/pic-3.svg';
import heart from '../svg/red-heart.svg'

const LikedProducts = () =>{
    return(
        <section>
            <div className={styles.bg}>
                <div className={styles.cards}>
                    <div className={styles.block_links}>
                        <nav>
                            <ul className={styles.block_item}>
                                <li className={styles.item}>
                                Корзина
                                </li>
                                <li className={styles.item}>
                                Понравившиеся товары
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
        </section>  
        )
}

export default LikedProducts;