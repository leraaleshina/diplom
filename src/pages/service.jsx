import { Header } from "../components/header.js";
import { Question } from "../components/footer_question.js";
import React from "react";
import axios from "axios";
import { setServices } from "../redux/actions/services.js";
import styles from "../css components/service.module.css";
import Card from "../components/Card.js";
import Product from "../components/Product.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import server from "../svg/server-serv.svg";
import phone from "../svg/phone_serv.svg";
import tv from "../svg/tv_serv.svg";
import print from "../svg/print-serv.svg";
import notebook from "../svg/nout_serv.svg";
import classNames from "classnames";

const links = [phone, notebook, print, server, tv];

const Service = () => {
  const dispatch = useDispatch();

  const items = useSelector(({ services }) => services.items);

  const [type, setType] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => dispatch(setServices(data.services)));
  }, []);

  const setLink = (i) => {
    setType(i);
  };

  console.log(items);

  return (
    <div className={styles.background}>
      <Header />
      <section className={styles.service}>
        <h1 className={styles.title}>Услуги</h1>
        <ul className={styles.cards_wrapper}>
          {links.map((link, i) => (
            <Card key={`${link}_${i}`} onClick={() => setLink(i)} src={link} />
          ))}
        </ul>
        <div
          className={classNames(styles.kat_service, {
            [styles.active]: type >= 0 && type !== null,
          })}
        >
          {items[type] && items[type].map((item, i) => (
            <Product key={i} priceList={item} />
          ))}
        </div>

        <Link to={"/"}>
          {" "}
          <button className={styles.button}>Записаться на услуги</button>{" "}
        </Link>
      </section>
      <Question />
    </div>
  );
};

export default Service;

// {<Product priceList={items[type]} />}
