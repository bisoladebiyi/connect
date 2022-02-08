import { useRouter } from 'next/router';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import CreatePost from "../components/CreatePost";
import Feed from "../components/Feed";
import styles from "../styles/Feed.module.css";
import { auth } from "../firebase";
import ConnectUsers from '../components/ConnectUsers';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';



export default function Home() {
  const [ user, setUser ] = useState(null)
  const router = useRouter()
  const postRef = useRef(null)
  useEffect(()=> {
    onAuthStateChanged(auth, user => {
      if(user){
        setUser(user.providerData[0])
      }else{
        router.push("/login")
      }
     
    })
  })
  const scrollUp = () => {
    postRef?.current?.scrollIntoView({
      behavior: "smooth"
    })
  }
  return (
    <div className='main'>
      <main>
        <ConnectUsers />
        <div className="feedContainer">
         <div ref={postRef}></div>
          <CreatePost user={user}  />
        <Feed />
        <div className={styles.scrollArrow} onClick={scrollUp}>
      <ArrowUpwardRoundedIcon className={styles.arrow} />
      </div>
        </div>
      </main>
      <style jsx>
        {`
        .main{
          height: 100%;
          overflow:hidden;
        }
          main {
            padding-top: 100px;
            display: flex;
            justify-content: space-between;
            height:100%;
          }
          .feedContainer{
            width: 70%;
            height:100%;
            overflow:scroll;
          }

        `}
      </style>
    </div>
  );
}
