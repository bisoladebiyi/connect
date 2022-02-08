import { Avatar } from '@mui/material';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import React, { useEffect, useState } from 'react';
import styles from "../styles/PersonalInfo.module.css"

const PersonalInfo = ({user, otherUser}) => {
  
  return <div className={styles.container}>
      <div className={styles.avatarContainer}>
      <Avatar src={user?.photoURL} className={styles.avatar} />
      </div>
      <p className={styles.name}>{user?.displayName}</p>
      { otherUser ? null :<p className={styles.email}>{user?.email}</p>}
      {otherUser ? null : <button className={styles.btn}><ManageAccountsOutlinedIcon className={styles.icon}/> Settings</button>}

      
      
  </div>;
};

export default PersonalInfo;
