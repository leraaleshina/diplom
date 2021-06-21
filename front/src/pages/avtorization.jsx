import React from 'react';
import styles from '../css components/avtorization.module.css';
import { Link } from 'react-router-dom'
import desktop from '../svg/desktop.svg';

// const Authentication = (props) => {
//     const isLogin = props.match.path === "/login";
//     const pageTitle = isLogin ? "Sign In" : "Sign Up";
//     const descriptionLink = isLogin ? "/register" : "/login";
//     const descriptionText = isLogin ? "Need an account ?" : "Have an account ?";
//     const apiUrl = isLogin ? "/users/login" : "/users";
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [username, setUsername] = useState("");
//     const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
//     const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
//     const [token, setToken] = useLocalStorage("token");
//     const [, dispatch] = useContext(CurrentUserContext);
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const user = isLogin ? { email, password } : { email, password, username };
//       doFetch({
//         method: "post",
//         data: {
//           user,
//         },
//       });
//     };
  
//     useEffect(() => {
//       if (!response) return;
//       setToken(response.user.token);
//       setIsSuccessfullSubmit(true);
//       dispatch({ type: "SET_AUTHORIZED", payload: response.user });
//     }, [response, setToken, dispatch]);
  
//     if (isSuccessfullSubmit) {
//       return <Redirect to="/" />;
//     }


const Avtorization = () => {
    return (
        <div className={styles.background}>
            <section className={styles.avtoriz}>
               <div className={styles.block_bg}>
               <Link to ={'/'}> <button className={styles.button_first}>Главная страница</button> </Link>
               <div className={styles.block}>
              
                    <div className={styles.links}>
                        <a href="/" className="reg-link"><span className={styles.title}>Вход</span></a>
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
                            type="password"
                            value={styles.value}
                            onChange={styles.handleChange}
                            placeholder="Пароль"
                        />
                    </div>
                    <Link to ={'/'}> <button className={styles.button}>Войти</button> </Link>
                </div>
               </div>
               <div className={styles.block_sec}>
                   <img src={desktop} alt="" className={styles.desctop}/>
               </div>
            </section>
        </div>
    )
}

export default Avtorization;