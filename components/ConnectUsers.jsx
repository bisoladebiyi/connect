import { Avatar } from '@mui/material';
import { getAuth } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { auth, db } from '../firebase';
import styles from '../styles/ConnectUsers.module.css'

const ConnectUsers = () => {
    const [ users, setUsers ] = useState(null)
    useEffect(()=> {
        onSnapshot(collection(db, "users"), snapshot => setUsers(snapshot) )
    },[])
  return <div className={styles.container}>
      <p className={styles.title}>See Other Users</p>
      <div>
      {users?.docs.map((doc)=> {
    return <div key={doc.id} className={styles.userContainer}>
        <Avatar src={doc.data().user.photoURL} className={styles.avatar} />
        <div>
        <p className={styles.name}>{doc.data().user.displayName}</p>
        <p className={styles.userTitle}>Connect User</p>
        </div>
    </div>
})}
      </div>

  </div>;
};

export default ConnectUsers;
