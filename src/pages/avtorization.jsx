import React from 'react';
import styles from '../css components/avtorization.module.css';
import { Link } from 'react-router-dom'
import desktop from '../svg/desktop.svg';

const Avtorization = () => {
    return (
        <div className={styles.background}>
            <section className={styles.avtoriz}>
               <div className={styles.block_bg}>
                   
               <div className={styles.block}>
               <Link to ={'/'}> <button className={styles.button_first}>Главная страница</button> </Link>
                    <div className={styles.links}>
                        <a href="#" className="reg-link"><span className={styles.title}>Вход</span></a>
                        <a href="/registration" className="reg-link"><span className={styles.title_reg}>/Регистрация</span></a>
                    </div>
                    <div className={styles.form}>
                        <input
                            className={styles.form_input}
                            id={styles.name}
                            name={styles.name}
                            type={styles.type}
                            value={styles.value}
                            onChange={styles.handleChange}
                            placeholder="E-mail илм телефон"
                        />
                        <input
                            className={styles.form_input}
                            id={styles.name}
                            name={styles.name}
                            type={styles.type}
                            value={styles.value}
                            onChange={styles.handleChange}
                            placeholder="Пароль"
                        />
                    </div>
                    <a href="" className={styles.link}><span className={styles.password}>Забыли пароль?</span></a>
                    <Link to ={'/persona'}> <button className={styles.button}>Войти</button> </Link>
                </div>
               </div>
               <div className={styles.block_sec}>
                   <img src={desktop} alt="" className={styles.desctop}/>
               </div>
            </section>
        </div>
    )
}

export default Avtorization