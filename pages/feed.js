import { useRouter } from 'next/router';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import Feed from "../components/Feed";
import Navbar from "../components/navbar";
import { auth } from "../firebase";


export default function Home() {
  const [ user, setUser ] = useState(null)
  const router = useRouter()
  useEffect(()=> {
    onAuthStateChanged(auth, user => {
      if(user){
        setUser(user.providerData[0])
      }else{
        router.push("/login")
      }
     
    })
  })
  return (
    <div>
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
