import { Avatar } from '@mui/material';
import React from 'react';
import styles from "../styles/Home.module.css"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
const Navbar = ({ user }) => {
  return <div className={styles.nav}>
     <h3 className={styles.logo}>
         connect
     </h3>
     <div className={styles.icons}>
         <AddRoundedIcon className={styles.navAdd}  />
         <Avatar src={user?.photoURL}/>
     </div>
  </div>;
};

export default Navbar;
