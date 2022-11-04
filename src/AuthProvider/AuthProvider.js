import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from 'firebase/auth' 
import {app }from '../firebase/firebase'


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState({displayName:'Shakib'})
    const googleProvider = new GoogleAuthProvider();

    // create user using email and pass
    const userRegistration = (email, pass)=>{

        return createUserWithEmailAndPassword(auth, email, pass)
    }

    // sign in using eamil and pass 
    const userSignIn = (email,pass)=>{
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // google signup

    const googleSignUp = ()=>{

        return signInWithPopup(auth,googleProvider)
    }

    // SignOut 

    const logOutUser = ()=>{
        
        return signOut(auth)
    }

    // Reset password
    const resetPass = (email)=>{

        return sendPasswordResetEmail(auth, email)

    }

    // update user profile
    const updateUserProfile = (profile)=>{
       return updateProfile(auth.currentUser,profile)
    }
    

    const authInfo = { user, googleSignUp, logOutUser, userRegistration, userSignIn, resetPass, updateUserProfile }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubcribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;