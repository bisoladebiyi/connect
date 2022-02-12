import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { auth } from '../firebase';
import styles from "../styles/Login.module.css"
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import { signInWithGoogle } from '../utils';
import { ArrowDownwardRounded } from '@mui/icons-material';
import * as smoothscroll from 'smoothscroll-polyfill';
import HeadComponent from '../components/Head';

const Login = () => {
    const router = useRouter()
    const signInRef = useRef(null)
    useEffect(()=> {
        onAuthStateChanged(auth, user => {
            if(user){
                router.push("/feed")
            }
        })
        smoothscroll.polyfill();
    },[])
    const signIn = () => {
        signInWithGoogle().then(()=> router.push("/feed"))
    }
    const scroll = () => {
        signInRef.current.scrollIntoView({
            behavior: "smooth"
        })
    }
  return <div className='container'>
       <HeadComponent text ="Login - Share" className="head" />
       <div className={styles.container}>
       <div className={styles.aboutConnectContainer}>
          <div className={styles.aboutConnect}>
          <h2>Welcome To <span className={styles.span}>share</span></h2>
          <ConnectWithoutContactRoundedIcon className={styles.connectIcon} />
          <p className={styles.aboutText}><span className={styles.span}>share </span>is a fun webapp that allows you share your thoughts and ideas with everyone! 😃 </p>
          </div>
<ArrowDownwardRounded onClick={scroll} className={styles.scroll} />
      </div>
      <div className={styles.body} ref={signInRef}>
          <div className={styles.signIn}>
          <h3 className={styles.logo}>share...</h3>
          <h2 className={styles.signUp}>Sign In To Share</h2>
          <p className={styles.text}>Share your thoughts with the world</p>
          <button onClick={signIn} className={styles.button}>Sign Up With Google</button>
          </div>
          
      </div>
     
       </div>
   
      
  </div>;
};

export default Login;


