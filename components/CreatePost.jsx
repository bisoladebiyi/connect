import { serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import styles from '../styles/CreatePost.module.css'
import { makePost } from '../utils';
const CreatePost = ({user}) => {
    const [value, setValue] = useState("")
    const [ text, setText ] = useState({text: "", time: serverTimestamp(), userData: {}})

    
    const change = (e) => {
        setValue(e.target.value)
        setText({...text, text: e.target.value, userData: user})
        console.log(text)
    }
    const sendPost = (e) => {
        e.preventDefault()
        if(value){
            makePost(text).then(()=> setValue(""))
        }else {
            alert("Please share something?😢")
        }
       
    }
  return <div className={styles.container}>

          <form className={styles.inputDiv} action="" onSubmit={(e) => sendPost(e)}>
          <textarea className={styles.input} value={value} placeholder="What's Up?" onChange={(e) => change(e)} autoFocus />
          <button type='submit' className={styles.button}>Make Post</button>
          </form>
          

  </div>;
};



export default CreatePost;
