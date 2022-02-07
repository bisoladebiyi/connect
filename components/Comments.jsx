import { Avatar } from '@mui/material';
import React from 'react';
import styles from '../styles/Feed.module.css'

const Comments = ({ comment }) => {
  return <div className={styles.userComment}>
      <Avatar className={styles.commentAvatar} src={comment.data().userData.photoURL} />
      <div>
          <p className={`${styles.name} ${styles.commentUserName}`}>{comment.data().userData.displayName}</p>
          <p className={styles.comment}>{comment.data().comment}</p>
      </div>
  </div>;
};

export default Comments;
