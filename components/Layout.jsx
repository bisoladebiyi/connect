import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import Navbar from './navbar';

const Layout = ({children}) => {
  const [ user, setUser ] = useState(null)
  useEffect(()=> {
    onAuthStateChanged(auth, user => {
        setUser(user.providerData[0])
    })
  },[])
  return <div>
      <Navbar user={user} />
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
