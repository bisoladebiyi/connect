import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import { Avatar } from '@mui/material';
import styles from '../styles/Feed.module.css'
import { auth, db } from '../firebase';
import { makeComment } from '../utils';
import { collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import Comments from './Comments';

const PostContainer = ({doc}) => {
  const [input, setInput] = useState(false)
  const [value, setValue] = useState("")
  const [ user, setUser ] = useState(null)
  const [ comments, setComments ] = useState(null)

  useEffect(()=> {
   onAuthStateChanged(auth, user => {
    setUser(user?.providerData[0])
   })
   onSnapshot(doc && query(collection(db, "posts", doc.id,"comments"), orderBy("time", "asc")), snapshot => setComments(snapshot))

  },[doc])
  const showInput = () => {
    setInput(!input)
  }
  const submitComment = () => {
    if(value){
      makeComment(doc.id, { comment: value, userData: user, time: serverTimestamp() }).then(()=> setValue(""))
    }else {
      console.log("no value")
    }
   
  }
  return <div className={styles.postContainer}>
       <Avatar src={doc.data().userData.photoURL} className={styles.userImg}/>
             <div className={styles.nameMessageContainer}>
                <p className={styles.name}>{doc.data().userData.displayName}</p>
                <p className={styles.message}>{doc.data().text}</p>
                <div className={styles.icons}>
                    <span onClick={showInput} className={styles.span}><ChatBubbleOutlineRoundedIcon className={styles.icon} />{comments ? comments.docs.length : '0'}</span>
                </div>
                {input && <div className={styles.commentsContainer}>
                  <div className={styles.commentContainer}>
                  <Avatar className={styles.commentAvatar} src={user?.photoURL}/>
                  <textarea value={value} onChange={(e)=> setValue(e.target.value)} className={styles.commentInput} type="text" placeholder='Add Comment' autoFocus />
                  <button className={styles.button} onClick={submitComment}>Send</button>
                  </div>
                  {comments?.docs.map((comment) => {
                    return <Comments key={comment.id} comment={comment} />
                  })}
                </div> }
             </div>
  </div>;
};

export default PostContainer;
