// Import the functions you need from the SDKs you need
import { sign } from "chart.js/helpers";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDCd3Tok1YKH8PyjekA8zD7_09e1FDPBk",
  authDomain: "netflix-clone-ac2ea.firebaseapp.com",
  projectId: "netflix-clone-ac2ea",
  storageBucket: "netflix-clone-ac2ea.firebasestorage.app",
  messagingSenderId: "873732094283",
  appId: "1:873732094283:web:94cab9da0c9f972ab9d0ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
const db=getFirestore(app);

const signup =async(name,email,password)=>{
    try {
      const res= await createUserWithEmailAndPassword(auth,email,password);
      const user=res.user;

      await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
      });



    } catch (error) {
        
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }

}


const login = async(email,password)=>{

try {

await signInWithEmailAndPassword(auth,email,password)

} catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "));
}

}


const logout =()=>{

    signOut(auth)
}

export {auth,db,login,signup,logout}