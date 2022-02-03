import { useRouter } from 'next/router';
import React from 'react';
import styles from "../styles/Login.module.css"
import { signInWithGoogle } from '../utils';

const Login = () => {
    const router = useRouter()
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
