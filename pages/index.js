import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { auth } from '../firebase';

const Home = () => {
    const router = useRouter()
    useEffect(()=> {
        onAuthStateChanged(auth, user => {
            if(user){
                router.push("/feed")
            }else {
                router.push("/login")
            }
        })
       
    })
  return <div></div>;
};

export default Home;
