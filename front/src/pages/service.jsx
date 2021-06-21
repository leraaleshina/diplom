import { Header } from '../components/header.js'
import { Question } from '../components/footer_question.js'
import React from 'react';
import styles from '../css components/service.module.css';
import Card from '../components/Card.js'
import Product from '../components/Product.js'
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../redux/actions/services.js'
import server from "../svg/server-serv.svg";
import phone from "../svg/phone_serv.svg";
import tv from "../svg/tv_serv.svg";
import print from "../svg/print-serv.svg";
import notebook from "../svg/nout_serv.svg";
import classNames from 'classnames';

const links = [phone, notebook, print, server, tv]

const Service = () => {
  const dispatch = useDispatch()
  const services = useSelector(( { services } ) => services.items)
  const [ type, setType ] = React.useState(null)

  React.useEffect(() => {
    dispatch(fetchServices())
  }, [])

  const setLink = i => {
    setType(i)
  }
  
  return (
    <div className={styles.background}>
      <Header/>
      <section className={styles.service}>
        <h1 className={styles.title}>Услуги</h1>
        <ul className={styles.cards_wrapper}>
          {links.map((link, i) => <Card key={`${link}_${i}`} onClick={() => setLink(i)} src={link} />)}
        </ul>
        <div className={classNames(styles.kat_service, {[styles.active]: type >= 0 && type !== null })}>
          {<Product priceList={services[type]}/>}
        </div>
      </section>
      <Question/>
    </div>
  )

}

export default Service;