import { Avatar } from '@mui/material';
import autosize from 'autosize';
import { onAuthStateChanged } from 'firebase/auth';
import { serverTimestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import styles from '../styles/CreatePost.module.css'
import { makePost } from '../utils';
const CreatePost = ({user}) => {
    const [value, setValue] = useState("")
    const [ text, setText ] = useState({text: "", time: serverTimestamp(), userData: {}})

    
    const change = (e) => {
        let post = document.getElementById("post")
        setValue(e.target.value)
        autosize(post)
        setText({...text, text: e.target.value, userData: user})
        console.log(text)
    }
    const sendPost = (e) => {
        e.preventDefault()
        makePost(text).then(()=> setValue(""))
    }
  return <div className={styles.container}>
      <Avatar src={user?.photoURL}/>
      <div className={styles.inputDiv}>
          <form action="" onSubmit={(e) => sendPost(e)}>
          <textarea className={styles.input} value={value} id="post" placeholder="What's Up?" onChange={(e) => change(e)} />
          <button type='submit' className={styles.button}>Post</button>
          </form>
          
      </div>

  </div>;
};



export default CreatePost;
// export const getStaticProps = async() => {
//     const userData = {}
//    await onAuthStateChanged(auth, (user) => { userData =  user.providerData[0] })
//     return {
//         props: {userData}
//     }

// }
