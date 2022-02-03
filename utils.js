import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "./firebase"

export const makePost = async(post) => {
    try{
        await addDoc(collection(db, "posts"), post)
    }catch(err){
        throw err
    }
}

export const signInWithGoogle = async() => {
const provider = new GoogleAuthProvider()
   try{
       const response = await signInWithPopup(auth, provider)
       console.log(response)
   }catch(err){
       throw err
   }
}