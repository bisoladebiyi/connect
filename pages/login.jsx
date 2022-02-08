import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { auth } from '../firebase';
import styles from "../styles/Login.module.css"
import { signInWithGoogle } from '../utils';

const Login = () => {
    const router = useRouter()
    useEffect(()=> {
        onAuthStateChanged(auth, user => {
            if(user){
                router.push("/feed")
            }
        })
    },[])
    const signIn = () => {
        signInWithGoogle().then(()=> router.push("/feed"))
    }
  return <div className={styles.container}>
      <div className={styles.body}>
          <h3 className={styles.logo}>connect</h3>
          <h2 className={styles.signUp}>Sign In To Connect</h2>
          <button onClick={signIn} className={styles.button}>Sign Up With Google</button>
      </div>
  </div>;
};

export default Login;
