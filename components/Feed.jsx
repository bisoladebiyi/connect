import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import { Avatar } from '@mui/material';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Feed.module.css'
import Image from 'next/image';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
const Feed = () => {
    const [ posts, setPosts ] = useState(null)
    useEffect(()=> {
        onSnapshot(query(collection(db, "posts"), orderBy("time", "desc")), (snapshot) =>  setPosts(snapshot))
        console.log(posts)
      },[])

  return <div className={styles.container}>
     {posts?.docs.map(doc => {
         return <div key={doc.id} className={styles.postContainer}>
               <Avatar src={doc.data().userData.photoURL}/>
             <div className={styles.nameMessageContainer}>
                <p className={styles.name}>{doc.data().userData.displayName}</p>
                <p className={styles.message}>{doc.data().text}</p>
                <div className={styles.icons}>
                    <span className={styles.span}><FavoriteBorderRoundedIcon className={styles.icon} />0</span>
                    <span className={styles.span}><ChatBubbleOutlineRoundedIcon className={styles.icon} /> 0</span>

                </div>
             </div>
        
         </div>
     })}
  </div>;
};


export default Feed;

