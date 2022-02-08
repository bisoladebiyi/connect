import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState }from 'react';
import { auth, db } from '../firebase';
import styles from '../styles/UserPosts.module.css'
import PostContainer from './PostContainer';



const UserPosts = ({ user }) => {
    const [ userPosts, setUserPosts ] = useState(null)
    const [ viewAll, setViewAll ] = useState(false)


    useEffect(()=> { 
            onSnapshot(query(collection(db, "posts"),orderBy("time", "desc")), snapshot =>{
                setUserPosts(snapshot)
            } )
    }, [])

  return <div className={styles.container}>
      <div className={styles.heading}>
          <p className={!viewAll ? `${styles.title}` : `${styles.margin} ${styles.secondTitle}`} onClick={() => setViewAll(false)}>Recent Posts</p>
          <p className={viewAll ? `${styles.title}` : `${styles.secondTitle}`} onClick={() => setViewAll(true)}>All Posts</p>
      </div>
      <div className={styles.postContainer}>
          {!viewAll ? userPosts?.docs.filter((doc)=> doc.data().userData.uid === user?.uid).slice(0, 3).map((post)=> (
              <div key={post.id}>
                  <PostContainer doc={post}  />
              </div>
          )) :
          userPosts?.docs.filter((doc)=> doc.data().userData.uid === user?.uid).map((post)=> (
            <div key={post.id}>
                <PostContainer doc={post}  />
            </div>
        ))
        }

      </div>
      
  </div>;
};

export default UserPosts;
