// @flow 
import * as React from 'react';
import styles from '../css components/catalog.module.css'
import basket from '../svg/basket-icon.svg'
import heart from '../svg/blue-heart.svg'

const ProductCatalog = ({ id, price, image, onClickAddProduct }) => {

    const onAddProduct = (e) => {
        e.preventDefault() 
        const obj = {
            id: id,
            price: price,
            image: image
        }
        onClickAddProduct(obj)
    }

    return (
        <div className={styles.card}>
            <a href={`/product/${id}`} className={styles.link}>
                <img src={image} alt="" className={styles.pic} />
            </a>
            <div className={styles.liked}>
                <span className={styles.price}>{price} рублей</span>
                <div className={styles.item_liked}>
                    <a onClick={onAddProduct} href="" className={styles.icon_link}>
                        <img src={basket} alt="product" className={styles.img_icon} />
                    </a>
                    <a href="" className={styles.icon_link}>
                        <img src={heart} alt="product" className={styles.img_icon} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCatalog