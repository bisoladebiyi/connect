import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { addDoc, collection, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { auth, db } from "./firebase";

export const makePost = async (post) => {
  try {
    await addDoc(collection(db, "posts"), post);
  } catch (err) {
    throw err;
  }
};

export const makeComment = async(id, comment) => {
    try{
      await addDoc(collection(db, "posts", id, "comments"), comment)
    }catch(err){
      throw err
    }
}

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  try {
    const response = await signInWithPopup(auth, provider);
  } catch (err) {
    throw err;
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    throw err;
  }
};
