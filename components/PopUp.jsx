import React from 'react';
import { Avatar } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import styles from '../styles/PopUp.module.css'
import { logOut } from '../utils';
import { useRouter } from 'next/router';
import Link from 'next/link';

const PopUp = ({user, close}) => {
    const router = useRouter()
    const signOut = () => {
        logOut().then(()=> router.push("/login"))
    }
  return <div className={styles.container}>
      <Avatar className={styles.avatar} src={user?.photoURL} />
<p className={styles.name}>{user?.displayName}</p>
<p className={styles.email}>{user?.email}</p>
<div className={styles.btnContainer}>
<Link href={'/feed'} passHref><button className={styles.btn} onClick={close}><HomeRoundedIcon className={styles.icon}/> Feed</button></Link> 
<Link href={'/profile'}  passHref><button className={styles.btn} onClick={close}><AccountCircleOutlinedIcon className={styles.icon}/> View Profile</button></Link>
<button className={styles.btn} onClick={signOut}><LogoutRoundedIcon className={styles.icon} /> Sign Out</button>
</div>

  </div>
};

export default PopUp;
