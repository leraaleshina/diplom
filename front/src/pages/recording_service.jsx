import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import React from "react";
import styles from "../css components/feedback.module.css";
import { Link } from "react-router-dom";

const Recording = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [text, setText] = React.useState('');

  const [nameDirty, setNameDirty] = React.useState(false);
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [textDirty, setTextDirty] = React.useState(false);

  const [nameError, setNameError] = React.useState("Введите имя");
  const [emailError, setEmailError] = React.useState("Введите E-mail");
  const [textError, setTextError] = React.useState("Оставьте комментарий");

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'text':
        setTextDirty(true);
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

  const textHandler = (e) => {
    setText(e.target.value)
    const regExp =  /^[А-ЯЁа-яёA-Za-z0-9]{10,1000}[А-ЯЁа-яё0-9]{10,1000}$/;
    if (!regExp.test(String(e.target.value).toLowerCase())){
      setTextError("Некорректный комментарий")
    } else{
      setTextError('')
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.feedback}>
        <div className={styles.background}>
          <div className={styles.card}>
            <h3 className={styles.title}>Запись на услугу</h3>
            <div className={styles.form}>
              {(nameDirty && nameError) && 
                <div style={{ color: 'red' }}>{nameError}</div>
              }
              <input
                onChange = {e => nameHandler(e)}
                onBlur={e => blurHandler(e)}
                className={styles.form_input}
                name='name'
                type="text"
                placeholder="Ваше имя"
              />
              {(emailDirty && emailError) && 
                <div style={{ color: "red" }}>{emailError}</div>
              }
              <input
                onChange = {e => emailHandler(e)}
                onBlur={e => blurHandler(e)}
                className={styles.form_input}
                name="email"
                placeholder="E-mail"
              />
            </div>
            {textDirty && textError && 
              <div style={{ color: "red" }}>{textError}</div>
            }
            <textarea
              onChange = {e => textHandler(e)}
              onBlur = {e => blurHandler(e)}
              className={styles.text}
              name="text"
              placeholder="Опишите вашу проблему с устройством и услугу, на которую хотели бы записаться"></textarea>
            <Link to={"/"}>
              {" "}
              <button className={styles.button}>Отправить</button>{" "}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recording;
