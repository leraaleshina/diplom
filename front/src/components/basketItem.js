// @flow 
import * as React from 'react';
import styles from '../css components/basket.module.css';
import heart from '../svg/red-heart.svg'

const BasketItem = ({ image, price }) => {

    return (
        <div className={styles.card}>
            <div className={styles.card_top}>
                <img src={image} alt="pic" className={styles.image} />
            </div>           
            <div className={styles.like}>
            <span className={styles.price}>
                {price} рублей
            </span>
            <div className={styles.icons}>
            <input type="checkbox" className={styles.check} />
            <img src={heart} alt="pic" className={styles.image} />
            <span className={styles.remove}>X</span>
            </div>
            </div>
        </div>
    );
};

export default BasketItem