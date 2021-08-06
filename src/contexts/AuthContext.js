import React, { createContext, useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import firebase from "../config/firebase"
import { QuizContext } from "./QuizContext";
const db = firebase.firestore()

// const googleProvider = new firebase.auth.GoogleAuthProvider()

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [score, setScore] = useState(0);
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [Alert, setAlert] = useState({ status: false, msg: "" });
    const history = useHistory();
    useEffect(() => {
        
        firebase.auth().onAuthStateChanged(async (userData) => {
            console.log(userData)
            if (userData) {
                let ref = await firebase.firestore().collection("users").where("uid", "==", userData.uid).get();
                let userRef = ref.docs.map((doc) => doc.data())[0]
                setUser(userRef)
                setIsAuth(true) 
                setLoading(false)   
            } else {
                setIsAuth(false)
                setLoading(false)
            }
        });
    }, [])


    
    //Handle signup
    const handleSignup = (name, email, password) => {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((ref) => {
                ref.user.updateProfile({
                    displayName: name,
                });
                let user = {
                    uid: ref.user.uid,
                    name: name,
                    email: email,
                    questionNo: 1,
                    score: 0
                }
                db.collection("users").add(user)
                    .then((docRef) => {
                        localStorage.setItem("docId", docRef.id);
                        handleSignin(email, password)
                    })
                    .catch((error) => {
                        setAlert({ status: false, msg: "Something went wrong please try again" })
                    });

            })
            .catch(error => {
                var errorCode = error.code;
                if (errorCode === "auth/email-already-in-use") {
                    setAlert({ status: true, msg: "Email already exists please sign in",signup:true,signin:false })
                    setLoading(false)
                } else {
                    setAlert({ status: true, msg: "Something went wrong please try again",signup:true,signin:false })
                    setLoading(false)
                }
                setTimeout(() => {
                    setAlert({ status: false, msg: "" })
                }, 5000);
            })
    }

    //Handle signin
    const handleSignin = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/quiz")
            })
            .catch((error) => {
              
                setAlert({ status: true, msg: "There is no account with this credentials please signup",signup:false,signin:true })
                setLoading(false)
                setTimeout(() => {
                    setAlert({ status: false, msg: "" })
                }, 5000);
            });

    }




    const value = {
        handleSignup, user, setUser, isAuth, setIsAuth, handleSignin, loading, setLoading, Alert,score, setScore
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}