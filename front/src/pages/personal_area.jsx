import React from 'react';
import styles from '../css components/personal_area.module.css';
import personal_photo from '../svg/personal_photo.svg'
import { Header } from '../components/header.js'
import { Footer } from '../components/footer.js'
import Slick from '../components/slider'


const Persona = () => {
    return (
        
        <section className={styles.personal_area}>
            <Header />
           <div className={styles.background}>
           <h1 className={styles.personal_title}>
                Личный кабинет
            </h1>
            <div className={styles.personal_wrapper}>
                <div className={styles.personal_data}>
                    <div className={styles.img}>
                        <img src={personal_photo} alt="" className={styles.personal_photo} />
                    </div>
                    <div className={styles.block}>
                        <div className={styles.data}>
                            <span className={styles.info}>Макаренко Карина Андреевна</span>
                            <a className={styles.info} href="mailto:leradavidova15@gmail.com">leradavidova15@gmail.com</a>
                            <a href="tel:+7 988-255-50-77" className={styles.info}>+7 988-255-50-77</a>
                            <button className={styles.header_button}>Редактировать</button>
                        </div>
                        <div className={styles.adress_title}>
                            <span className={styles.info}>Адрес доставки</span>
                            <span className={styles.info}>Способ оплаты</span>
                        </div>
                        <div className={styles.adress}>
                            <span className={styles.adr_info}>Тургеневская 10/6</span>
                            <span className={styles.adr_info}>4675 4321 6789 4324</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.product}>
                <a href="/like">
                    <h2 className={styles.title}>
                        Понравившиеся товары
                    </h2>
                </a>
            </div>
            <Slick />
           </div>
           <Footer />
        </section>
    )
}

export default Persona;