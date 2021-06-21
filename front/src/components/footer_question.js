import React from "react";
import styles from "../css components/footer_question.module.css";
import vk from "../svg/Vk.svg";
import tg from "../svg/tg.svg";
import inst from "../svg/inst.svg";
import axios from 'axios'
import { Link } from "react-router-dom";

export const Question = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [nameDirty, setNameDirty] = React.useState(false);
  const [emailDirty, setEmailDirty] = React.useState(false);

  const [nameError, setNameError] = React.useState("Введите имя");
  const [emailError, setEmailError] = React.useState("Введите E-mail");

  const [state, setState] = React.useState({})

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
    }
  };
  
  const nameHandler = (e) => {
    setName(e.target.value)
    const regExp = /[А-ЯЁа-яё]/
    if (!regExp.test(String(e.target.value).toLowerCase())){
      setNameError("Некорректное имя")
    } else{
      setNameError('')
    }
  }


  const emailHandler = (e) => {
    setEmail(e.target.value)
    const regExp =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regExp.test(String(e.target.value).toLowerCase())){
      setEmailError("Некорректный e-mail")
    } else{
      setEmailError('')
    }
  }

  const requestDispatchHandler = () => {
    if (nameDirty && emailDirty) {
      const data = {
        name,
        email
    }

  axios.post('http://45.90.34.137:5000/api/application/create', data)
    .then(response => setState(response.data))
    .catch(error => console.error(error))
  }
}

  return (
    <footer className={styles.question}>
      <div className={styles.question_section}>
        <div className={styles.description}>
          <span className={styles.quest_title}>Остались вопросы?</span>
          <p className={styles.quest_description}>
            Если у вас остались вопросы, оставьте заявку и мы свяжемся с Вами!
          </p>
        </div>
        <div className={styles.form_group}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputLeft}>
              {(nameDirty && nameError) && 
                  <span className={styles.errorText} style={{ color: 'red' }}>{nameError}</span>
                }
            <input
              onChange = {e => nameHandler(e)}
              onBlur={e => blurHandler(e)}
              className={styles.form_input}
              name="name"
              type="text"
              placeholder="Имя"
              />
            </div>
            <div className={styles.inputRight}>
              {(emailDirty && emailError) && <span className={styles.errorText} style={{ color: "red", width: "100px" }}>{emailError}</span>}
              <input
                onChange = {e => emailHandler(e)}
                onBlur={e => blurHandler(e)}
                className={styles.form_input}
                name="email"
                placeholder="E-mail"
                />
            </div>
        
          </div>
          
          <button onClick={requestDispatchHandler} className={styles.request_button}>ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footer_wrapper}>
          <nav className={styles.footer_nav}>
            <ul className={styles.footer_menu}>
              <li className={styles.footer_item}>
              <Link to="/catalog" className={styles.footer_link}>
                  Товары
                </Link>
            </li>
            <li className={styles.footer_item}>
            <Link to="/service" className={styles.footer_link}>
                Услуги
              </Link>
            </li>
            <li className={styles.footer_item}>
              <Link to="/delivery" className={styles.footer_link}>
                Доставка
              </Link>
            </li>

            <li className={styles.footer_item}>
              <Link to="/contact" className={styles.footer_link}>
                Контакты
              </Link>
            </li>
            <li className={styles.footer_item}>
              <Link to="/feedback" className={styles.footer_link}>
                Обратная связь
              </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.footer_adress}>
            <a href="tel:+7 928-767-87-89" className={styles.footer_tel}>
              +7 928-767-87-89
            </a>
            <a href="tel:+7 928-959-60-61" className={styles.footer_tel}>
              +7 928-959-60-61
            </a>
            <a
              className={styles.footer_mail}
              href="mailto:singaservice61@yandex.ru"
            >
              singaservice61@yandex.ru
            </a>
            <div className={styles.ico_link}>
              <a href="https://vk.com/singaservice" className={styles.footer_ico_link}>
                <img src={vk} alt="vk" className={styles.footer_ico} />
              </a>
              <a href="https://t.me/SingaService" className={styles.footer_ico_link}>
                <img src={tg} alt="telegramm" className={styles.footer_ico} />
              </a>
              <a href="https://www.instagram.com/singa_service/" className={styles.footer_ico_link}>
                <img src={inst} alt="instagramm" className={styles.footer_ico}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
