import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import Feed from "../components/Feed";
import Navbar from "../components/navbar";
import { auth } from "../firebase";
import styles from "../styles/Home.module.css";
import { getPosts } from "../utils";

export default function Home() {
  const [ user, setUser ] = useState(null)
  useEffect(()=> {
    onAuthStateChanged(auth, user => setUser(user.providerData[0]))
  })
  return (
    <div>
      <Navbar user={user} />
      <main>
        <CreatePost user={user}  />
        <Feed />
      </main>
      <style jsx>
        {`
          main {
            padding-top: 70px;
          }
        `}
      </style>
    </div>
  );
}
