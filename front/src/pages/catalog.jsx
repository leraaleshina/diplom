import { Header } from '../components/header.js'
import { Question } from '../components/footer_question.js'
import React, {useState, useEffect} from 'react';
import styles from '../css components/catalog.module.css';
import axios from 'axios'
import basket from '../svg/basket-icon.svg'
import heart from '../svg/blue-heart.svg'
import { Link } from 'react-router-dom'

const Catalog = () => {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        axios.get('http://localhost:5000/api/product').then(data=>setProducts(data.data))
        }
        useEffect(() => { 
            getProducts()
        }, [])
    console.log(products);
    return (
        <section className={styles.catalog}>
            <Header />
            {/* <div className={styles.background}>
                    <div className={styles.wrapper_catalog}>
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
                {products.map(product=>(
                    <div className={styles.card}>
                        <a href={`/product/${product.id}`} className={styles.link}>
                            <img src={product.image} alt="" className={styles.pic} />
                        </a>
                        <div className={styles.liked}>
                            <span className={styles.price}>{product.price} рублей</span>
                            <div className={styles.item_liked}>
                                <a href="" className={styles.icon_link}>
                                    <img src={basket} alt="product" className={styles.img_icon} />
                                </a>
                                <a href="" className={styles.icon_link}>
                                    <img src={heart} alt="product" className={styles.img_icon} />
                                </a>
                            </div>
                        </div>
                </div>
                    ))}
                </div>
                <Link to ={'/'}> <button className={styles.button}>Показать еще</button> </Link>
                    </div>
            </div> */}
            <Question />
        </section>
    )
}

export default Catalog;