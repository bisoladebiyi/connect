import { collection, getDoc, getDocs, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import PersonalInfo from '../../components/PersonalInfo';
import UserPosts from '../../components/UserPosts';
import { db } from '../../firebase';

const  OtherUsersProfile = () => {
    const [ user, setUser ] = useState(null)
    const otherUser = true
   const router = useRouter()
    useEffect(()=> {
        onSnapshot(collection(db, "users"), snapshot => {
           const response = snapshot.docs.filter(snapshot => snapshot.id === router.query.id)
           setUser(response[0]?.data().user)  
        })
        console.log(user) 
    },[router.query.id])
    return <div className='container'>
   <main> 
       <PersonalInfo user={user} otherUser={otherUser} />
       <UserPosts user={user} />
   </main>
   <style jsx>
        {`
        div {
            height:100% 
        }
          main {
            padding-top: 80px;
            height:100%;
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
  </div>;
}

export default  OtherUsersProfile;
