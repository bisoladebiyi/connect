import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Feed.module.css";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import PostContainer from "./PostContainer";

const Feed = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("time", "desc")),
      (snapshot) => setPosts(snapshot)
    );
    console.log(posts);
  }, []);

  return (
    <div className={styles.container}>
      {posts?.docs.map((doc) => {
        return (
          <div key={doc.id} className={styles.posts}>
            <PostContainer doc={doc} />
          </div>
        );
      })}
      
    </div>
  );
};

export default Feed;
