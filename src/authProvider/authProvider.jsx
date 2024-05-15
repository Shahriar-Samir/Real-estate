import { createContext, useEffect, useState } from "react";
import {getAuth , signOut ,createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile ,GoogleAuthProvider,signInWithPopup, GithubAuthProvider, onAuthStateChanged} from 'firebase/auth'
import app from "../firebase/firebase.config";

export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider
    const githubProvider = new GithubAuthProvider


    function register(email,password){
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function signIn(email,password){
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    function signInWithGoogle(){
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    function signInWithGithub(){
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    function updateUser(details){
    setLoading(true)
      return updateProfile(auth.currentUser, details)
    }


    function logOut(){
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
        })
    },[])

    const authInfo = {register,signIn,signInWithGoogle,updateUser,signInWithGithub,user,loading,logOut,setLoading}
    return (
        <authContext.Provider value={authInfo}>
                {children}
        </authContext.Provider>
    );
};

export default AuthProvider;