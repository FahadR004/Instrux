import "./global-auth.css"
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";


const Login = () => {

  const {setAuth} = useContext(AuthContext);

  // For focusing user attention to a specfic element
  const userRef = useRef();
  const errRef = useRef();

  // For email
  const [email, setEmail] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);

  // For password
  const [password, setPassword] = useState('');
  const [pwdFocus, setPwdFocus] = useState(false);

   // In case of error
   const [errMsg, setErrMsg] = useState('');

  // For navigation to homepage after authentication
  const navigate = useNavigate();

   // For setting focus to the user input of name
   useEffect(() => {
       userRef.current.focus();
   }, []);

   // For setting error message.
   useEffect(() => {
       setErrMsg(''); // We set it to null anytime the set of inputs changes. This means the user has read the message.
   }, [email, password]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await axios.post(LOGIN_URL,
              JSON.stringify({ email, password }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
          console.log(JSON.stringify(response?.data));
          const accessToken = response?.data?.accessToken;
          const name = response?.data?.name
          console.log(name)
          setAuth({ email, password, name, accessToken });
          navigate('/homepage')
      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 401) {
              setErrMsg('Invalid Email or Password');
          } else {
              setErrMsg('Login Failed');
          }
          errRef.current.focus();
      }
  }

  return (
    <>
      <div className={styles["login-page"]}>
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit} method="POST">
          <div className={styles["logo-side"]}>   
            <h2 className={styles.logo1}>INSTRUX<span className={styles.hidden}>FAHAD</span></h2>
            <h2 className={styles.logo2}><span className={styles.hidden}>FFF</span>DASHBOARD</h2>
          </div>
          <div className={styles["input-side"]}>
            <h3 className={styles.welcome}>WELCOME BACK</h3>
            <p className={styles["main-para"]}>Login using account credentials provided by your organization</p>
            <p ref={errRef} className={errMsg ? styles["errmsg"] : styles["offscreen"]} aria-live="assertive">{errMsg}</p>            
            <fieldset>
                <label className={styles["email-label"]}id="email-label" htmlFor="email">
                Email
                <input
                    className={styles["email-input"]}
                    id="email"
                    type="email"
                    ref={userRef}
                    placeholder="Enter your email address"
                    autoComplete="off"
                    required
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus= {(e) => setEmailFocus(true)}
                    onBlur= {(e)=> setEmailFocus(false)}
                />
                </label>
            </fieldset>
            <fieldset>
                <label className={styles["password-label"]} id="password-label" htmlFor="password">
                Password
                <input
                    className={styles["password-input"]}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus ={(e) => setPwdFocus(true)}
                    onBlur = {(e) => setPwdFocus(false)}
                />
                </label>
            </fieldset>
              <button className={styles.btn} type="submit">Login</button>
            <p className={styles.forgot}>Forgot Password? <Link to="/reset">Reset it</Link></p>
            <p className={styles.account}>Don't have an account? <Link to="/signup">Signup</Link></p>
          </div>
        </form>
      </main>
      </div>
    </>
  );
};

export default Login;




