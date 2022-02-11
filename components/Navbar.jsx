import { Avatar } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styles from "../styles/Home.module.css";
import "../styles/Home.module.css";
import PopUp from "./PopUp";
import Link from "next/link";

const Navbar = ({ user }) => {
  const [showPopUpMenu, setShowPopUpMenu] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const showPopUp = () => {
    setShowModal(!showModal);
    setShowPopUpMenu(!showPopUpMenu);
  };
  const closePopUp = () => {  
    setShowPopUpMenu(false)
  }
  return (
    <div className={styles.nav}>
      <Link href="/feed" passHref><div><h3 className={styles.logo}>share</h3></div></Link>
      <div className={styles.form}>
      <input className={styles.search} type="text" placeholder="Search" />
      <SearchRoundedIcon className={styles.searchIcon} />
      </div>
     
      <div className={styles.icons}>
        <div className={styles.avatarBox} onClick={showPopUp}>
          <Avatar src={user?.photoURL} className={styles.userPhoto} />
        </div>
        {showModal && (
          <div className={styles.modal}>
            <p className={styles.name}>{user?.displayName}</p>
            <p className={styles.email}>{user?.email}</p>
          </div>
        )}

        {showPopUpMenu && <PopUp user={user} close={closePopUp} />}
      </div>
    </div>
  );
};

export default Navbar;
