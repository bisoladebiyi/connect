import { Avatar } from '@mui/material';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { auth, db } from '../firebase';
import styles from '../styles/ConnectUsers.module.css'

const ConnectUsers = () => {
    const [ users, setUsers ] = useState(null)
    const [currentUser, setCurrentUser ] = useState(null)
    useEffect(()=> {
        onAuthStateChanged(auth, user => setCurrentUser(user.providerData[0]))
        onSnapshot(collection(db, "users"), snapshot => setUsers(snapshot) )
    },[])
  return <div className={styles.container}>
      <p className={styles.title}>See Other Users</p>
      <div>
      {users?.docs.map((doc)=> {
    return  <Link href={currentUser.uid === doc.data().user.uid ? "/profile" : `/users/${doc.id}`}  key={doc.id} passHref><div className={styles.userContainer}>
       
        <Avatar src={doc.data().user.photoURL} className={styles.avatar} />
        <div>
        <p className={styles.name}>{doc.data().user.displayName}</p>
        <p className={styles.userTitle}>Connect User{currentUser.uid === doc.data().user.uid ? " - You!" : ""}</p>
        </div>
    </div></Link>
})}
      </div>

  </div>;
};

export default ConnectUsers;
