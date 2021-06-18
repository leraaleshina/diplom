import { Header } from '../components/header.js'
import { Footer } from '../components/footer.js'
import React from 'react';
import styles from '../css components/feedback.module.css';
import { Link } from 'react-router-dom'

const Feedback = () => {
    return(
       <div>
           <Header />
            <div className={styles.feedback}>
            <p className={styles.description}>
            Здесь Вы можете написать ваши пожелания,
            претензии и предложения по улучшению нашего сервиса. 
            Мы всегда рады нашим клиентам и учитываем их мнение!
            </p>
            <div className={styles.background}>
                <div className={styles.card}>
                    <h3 className={styles.title}>
                    Обратная связь
                    </h3>
                    <div className={styles.form}>
                            <input
                                className={styles.form_input}
                                id={styles.name}
                                name={styles.name}
                                type={styles.type}
                                value={styles.value}
                                onChange={styles.handleChange}
                                placeholder="Ваше ФИО"
                            />
                            <input
                                className={styles.form_input}
                                id={styles.name}
                                name={styles.name}
                                type={styles.type}
                                value={styles.value}
                                onChange={styles.handleChange}
                                placeholder="E-mail"
                            />
                </div>
                <textarea className={styles.text}>Введите текст</textarea>
                <Link to ={'/'}> <button className={styles.button}>Отправить</button> </Link>
            </div>
        </div>
        </div>
        <Footer />
       </div>
    )
}

export default Feedback;