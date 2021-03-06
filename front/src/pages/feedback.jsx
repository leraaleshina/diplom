import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import React from "react";
import styles from "../css components/feedback.module.css";
import axios from "axios";

const Feedback = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [text, setText] = React.useState('');

  const [nameDirty, setNameDirty] = React.useState(false);
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [textDirty, setTextDirty] = React.useState(false);

  const [nameError, setNameError] = React.useState("Введите имя");
  const [emailError, setEmailError] = React.useState("Введите E-mail");
  const [textError, setTextError] = React.useState("Оставьте комментарий");

  const [formValid, setFormValid] = React.useState(false)

  React.useEffect( () => { 
    if(nameError || emailError || textError){
      setFormValid(false)
    }else{
      setFormValid(true)
    }
  }, [emailError, nameError, textError])

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

  const handlerSendForm = () => {
    axios.post('http://45.90.34.137:5000/api/feedback/create', {
      name,
      email,
      msg: text,
    }).then(response => console.log(response))
    .catch(error => console.error(error))
  }
  
  
  return (
    <div>
      <Header />
      <div className={styles.feedback}>
        <p className={styles.description}>
          Здесь Вы можете написать ваши пожелания, претензии и предложения по
          улучшению нашего сервиса. Мы всегда рады нашим клиентам и учитываем их
          мнение!
        </p>
        <div className={styles.background}>
          <div className={styles.card}>
            <h3 className={styles.title}>Обратная связь</h3>
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
              placeholder="Введите текст"></textarea>
              <button onClick={handlerSendForm} disabled = {!formValid} className={styles.button}>Отправить</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;
