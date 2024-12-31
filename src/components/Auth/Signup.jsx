import "./global-auth.css"
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Signup = () => {

    const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;  
    const NAME_REGEX = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const REGISTER_URL = '/signup'

    // For setting focus
    const userRef = useRef();
    const errRef = useRef();

    // For names
    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    
     // For email 
     const [email, setEmail] = useState('');
     const [validEmail, setValidEmail] = useState(false);
     const [emailFocus, setEmailFocus] = useState(false);
 
     // For password
     const [password, setPassword] = useState('');
     const [validPwd, setValidPwd] = useState(false);
     const [pwdFocus, setPwdFocus] = useState('')
 
 
     // For confirming passwords
     const [matchPwd, setMatchPwd] = useState('');
     const [validMatch, setValidMatch] = useState(false);
     const [matchFocus, setMatchFocus] = useState(false);

     // For organization id
     const [organizationID, setOrganizationID] = useState('');
     const [orgIDFocus, setOrgIDFocus] = useState(false);
 
     // In case of error
     const [errMsg, setErrMsg] = useState('');

     // For setting focus to the user input of name
        useEffect(() => {
          userRef.current.focus();
      }, []);

    // For checking name input
    useEffect(() => {
        setValidName(NAME_REGEX.test(name));
    }, [name]);

    // For checking email input
    useEffect(()=> {
        setValidEmail(EMAIL_REGEX.test(email));

    }, [email]);

    // For checking password input
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd]);


    // For setting error message.
    useEffect(() => {
        setErrMsg(''); // We set it to null anytime the set of inputs changes. This means the user has read the message.
    }, [name, email, password, matchPwd]);

    // Set values here as defined in the backend 
    const handleSubmit = async (e) => {
        e.preventDefault();
        // By default the button is disable, so if the button is enabled with JS hack
        const test1 = NAME_REGEX.test(name);
        const test2 = PWD_REGEX.test(password);
        const test3 = EMAIL_REGEX.test(email)
        if (!test1 || !test2 || !test3) {  // If any is true, we display the error message.
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ email, name, password, organizationID }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            navigate('/')
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 500) {
                setErrMsg('An account already exists with this account!');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        } 
    }


    return (
      <>
        <div className={styles["signup-page"]}>
          <main className={styles.main}>
            <form className={styles.form} onSubmit={handleSubmit} method="POST">
              <div className={styles["logo-side"]}>   
                <h1 className={styles.logo1}>INSTRUX<span>FFFFFFFF</span></h1>
                <h1 className={styles.logo2}><span>FFF</span>REGISTRATION</h1>
              </div>
              <div className={styles["input-side"]}>
                <h3 className={styles.welcome}>REGISTER</h3>
                <p className={styles["main-para"]}>Your role shall be assigned manually by your organization</p>
                <p ref={errRef} className={errMsg ? styles["errmsg"] : styles["offscreen"]} aria-live="assertive">{errMsg}</p>
                <fieldset>
                  <label id="name-label" htmlFor="name" className={styles["name-label"]}>Name
                    <input 
                     className={styles.name}
                     id="name"
                     type="text"
                     ref={userRef}
                     placeholder="Enter your full name"
                     autoComplete="off"
                     required
                     value = {name}
                     onChange={(e) => setName(e.target.value)}  /* e is the event argument available everywhere ig. target is your input */
                     onFocus={() => setUserFocus(true)}
                     onBlur={() => setUserFocus(false)}
                    />
                  </label>
                  <p 
                id="useridnote" 
                className={userFocus && name && !validName ? styles["errmsg"] : styles["offscreen"]}>
                Invalid Name. Cannot include numbers or symbol.
                </p>
                </fieldset>
                <fieldset>
                  <label id="email-label" htmlFor="email" className={styles["email-label"]}>Email
                    <input 
                    className={styles.email}
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    autoComplete="off"
                    required
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    />
                  </label>
                  <p 
                id="emailnote" 
                className={emailFocus && email && !validEmail ? styles["errmsg"] : styles["offscreen"]}>
                Invalid Email!
                </p>

                </fieldset>
                <fieldset>
                  <label id="password-label" htmlFor="password" className={styles["password-label"]}>Password
                    <input 
                    className={styles.password}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    />
                  </label>
                  <p id="pwdnote" className={pwdFocus && !validPwd ? styles["errmsg"] : styles["offscreen"]}>
                Must include uppercase letters, lowercase letters, a number and a special character with range of 8-24 characters.<br />
                </p>
                </fieldset>
                <fieldset>
                  <label id="confirm-password-label" htmlFor="confirm-password" className={styles["confirm-password-label"]}>Confirm Password
                    <input 
                    className={styles["confirm-password"]}
                    id="confirm-password"
                    type="password"
                    placeholder="Re-enter your password"
                    required
                    value = {matchPwd}
                    onChange={(e) => setMatchPwd(e.target.value)}
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                    />
                  </label>
                  <p id="confirmnote" className={matchFocus && !validMatch ? styles["errmsg"] : styles["offscreen"]}>
                            Must match the first password input field.
                </p>
                </fieldset>
                <fieldset>
                  <label id="org-id-label" htmlFor="organization-id" className={styles["org-id-label"]}>Organization ID
                    <input 
                    className={styles["organization-id"]}
                    id="org-id"
                    type="text"
                    placeholder="Enter your organization id"
                    required
                    value = {organizationID}
                    onChange={(e) => setOrganizationID(e.target.value)}
                    onFocus={() => setOrgIDFocus(true)}
                    onBlur={() => setOrgIDFocus(false)}
                    />
                  </label>
                  {/* Organization ID will be verified from the backend */}
                </fieldset>
                <div className="terms-of-services">
                  <label className={styles["terms-label"]} id="terms-label" htmlFor="terms"><input className={styles["terms-input"]} id="terms" type="checkbox" name="termsofservice" value="terms-of-services"/>I accept Instrux <Link>Terms of Services</Link></label>
                </div>
                <button 
                className={styles["signup-btn"]} 
                type="submit" disabled={!validName || !validPwd || !validEmail || !validMatch ? true : false}>
                  Sign up
                </button>
                <p className={styles.account}>Already have an account? <Link to="/login">Login</Link></p>
              </div>
            </form>
          </main>
        </div>
      </>
    )
}
 
export default Signup;
