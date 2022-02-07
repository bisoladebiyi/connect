import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import Navbar from './navbar';

const Layout = ({children}) => {
  const [ userData, setUserData ] = useState(null)
  const [ showNav, setShowNav ] = useState(false)
  useEffect(()=> {
    onAuthStateChanged(auth, user => {
      if(user){
        setShowNav(true) 
        setUserData(user.providerData[0])
      }else{
        setShowNav(false)
      }
    
    })
  },[])
  return <div>
    {showNav && <Navbar user={userData} />}
      
      {children}
      <style jsx>
        {
          `
          div {
            height: 100%;
          }
          `
        }
      </style>
  </div>;
};

export default Layout;
