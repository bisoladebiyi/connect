import { addDoc, collection, getDoc, getDocs } from "firebase/firestore"
import { db } from "./firebase"

export const makePost = async(post) => {
    try{
        await addDoc(collection(db, "posts"), post)
    }catch(err){
        throw err
    }
}
// export const getPosts = async () => {
//   try {
//       const res = await getDocs(collection(db, "posts"))
//       console.log(res)
//   }catch(err) {
//       throw err
//   }
// }