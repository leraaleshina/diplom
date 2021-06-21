import React from "react";
import styles from '../css components/basket.module.css';
import { Header } from '../components/header.js'
import { Footer } from '../components/footer.js'
import { useDispatch, useSelector } from 'react-redux';
import BasketItem from '../components/basketItem'
import { NavLink as Link } from "react-router-dom";
import { deleteProductFromBasket } from '../redux/actions/basket'

const Basket = () => {

    const dispatch = useDispatch()

    const {items, totalProducts} = useSelector(state => ({
        items: state.basket.items,
        totalProducts: state.basket.totalProducts,
    }))

    return(
        <section className={styles.basket}>
            <Header />
            <div className={styles.bg}>
                <h1 className={styles.title}>Корзина</h1>
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
                                    <Link to="/like">
                                    Понравившиеся товары
                                    </Link>
                                </li>
                                <li>
                                    Итого: {totalProducts}
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class={styles.product_list}>
                        {items && items.map((product, i) => <BasketItem key={i} {...product} />)}
                    </div>
                    
                </div>
            </div>
            <Footer />
        </section>  
        )
}

export default Basket;