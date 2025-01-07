import { createUserWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const name ={
        name: "ayesha"
    }

    const [loading, setloading] = useState(true)
    
    // const [darkMode, setDarkMode] = useState(false);

// const DarkMode =()=>{
//     return<>
//     <div className={darkMode ? "dark" : "light"}>
//                     <Switch
//                         onChange={setDarkMode}
//                         checked={darkMode}
//                         offColor="#ccc"
//                         onColor="#000"
//                     />
//                 </div>
//     </>
// }

    const createUsers =(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser = (email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateProfileData = (updateData)=>{
        setloading(true)
        return updateProfile(auth.currentUser, updateData)
    }
    const SignOutUser = ()=>{
        setloading(true)
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider()
    const SigninWithGoogle = ()=>{
        setloading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const twitterProvider = new TwitterAuthProvider()

    const twitterSignIn = ()=>{
        setloading(true)
        return signInWithPopup(auth, twitterProvider)
    }

    const githubProvider = new GithubAuthProvider()
    const githubSignIn = ()=>{
        setloading(true)
        return signInWithPopup(auth, githubProvider)
    }





    const [user,setuser] = useState(null)
    // console.log(user);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
           
            setloading(false)
            setuser(currentUser)
        })
        return ()=>{
            setloading(false)
            unsubscribe()
        }
    },[])

    const [darkMode, setDarkMode] = useState(false);


    const authonfo = {
        createUsers,
        LoginUser,
        user,
        updateProfileData,
        SignOutUser,
        SigninWithGoogle,
        twitterSignIn,
        githubSignIn,
        loading,
        setloading,
        setDarkMode,
        darkMode,
        
     


    }
    return (
        <AuthContext.Provider value={authonfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;