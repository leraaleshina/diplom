import { Header } from '../components/header.js'
import { Question } from '../components/footer_question.js'
import React from 'react';
import styles from '../css components/service.module.css';
import Services from '../components/services.js'
import ServicesDetail from '../components/services_detail.js'
import ServicesPrice from '../components/servisec_price.js'
import { Link } from 'react-router-dom'


const Service = () =>{
    return(
        <div className={styles.background}>
            <Header />
            <section className={styles.service}>
                <h1 className={styles.title}>Услуги</h1>
  
            <Services />
            <div className={styles.kat_service}>
            <ServicesDetail />
<ServicesPrice />
            </div>

            <Link to={"/"}>
        {" "}
        <button className={styles.button}>Записаться на услуги</button>{" "}
      </Link>
            </section>
            <Question />
        </div>
    )
    
}

export default Service;