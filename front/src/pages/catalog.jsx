import { Header } from '../components/header.js'
import { Question } from '../components/footer_question.js'
import React, { useState, useEffect } from 'react';
import styles from '../css components/catalog.module.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import setProduct from '../redux/actions/products'
import ProductCatalog from '../components/ProductCatalog'
import { addProductToBasket } from '../redux/actions/basket'

const Catalog = () => {
    const dispatch = useDispatch()
    const getProducts = () => {
        axios.get('http://45.90.34.137:5000/api/product').then(data => dispatch(setProduct(data.data)))
    }

    useEffect(() => {
        getProducts()
    }, [])

    const {products, basket} = useSelector((state) => ({
        products: state.products.products,
        basket: state.basket.items
    }))

    const handleClickAddProduct = obj => {  
        dispatch(addProductToBasket(obj))
    }

    return (
        <section className={styles.catalog}>
            <Header />
            <div className={styles.background}>
                <div className={styles.wrapper_catalog}>
                    <h1 className={styles.title}>Товары</h1>
                    <div className={styles.block_cards}>
                        {products && products.map((obj, i) => (
                            <ProductCatalog key={i} onClickAddProduct={handleClickAddProduct}  {...obj}/>
                        ))}
                    </div>
                    <button className={styles.button}>Показать еще</button>
                </div>
            </div>
            <Question />
        </section>
    )
}

export default Catalog;