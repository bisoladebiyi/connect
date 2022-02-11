import { Avatar } from '@mui/material';
import React from 'react';
import styles from "../styles/PersonalInfo.module.css"
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

const PersonalInfo = ({user, otherUser}) => {
  
  return <div className={styles.container}>
      <div className={styles.avatarContainer}>
      <Avatar src={user?.photoURL} className={styles.avatar} />
      </div>
      <p className={styles.name}>{user?.displayName}</p>
      { otherUser ? null :<p className={styles.email}>{user?.email}</p>}
  </div>;
};

export default PersonalInfo;
