import React, { createContext, useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import firebase from "../config/firebase"
import { AuthContext } from "./AuthContext";
const db = firebase.firestore()

// const googleProvider = new firebase.auth.GoogleAuthProvider()

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {

    const [quiz, setQuiz] = useState(null);
    const { score, setScore } = useContext(AuthContext);
    const [answer, setAnswer] = useState();
    const { user, setUser, setLoading } = useContext(AuthContext)

    // Handle Answer
    const handleAnswer = (index) => {
        let tempArray = quiz
        tempArray.answerOptions.forEach((item) => {
            item.active = false
        })
        tempArray.answerOptions[index].active = true
        setQuiz(tempArray)
        setAnswer(tempArray.answerOptions[index].answerText)
    }

    //Get User Data
    const getUserData = async () => {
        let ref = await firebase.firestore().collection("users").where("uid", "==", user.uid).get();
        let userRef = ref.docs.map((doc) => doc.data())[0]
        setUser(userRef)
    }

    //Handle Quiz
    const handleQuiz = async (status) => {
        let docId = localStorage.getItem("docId")
        let userRef = firebase.firestore().collection("users").doc(docId)
        let quizScore = score
        let userData = user

        if (status) {

            userRef.update({ score: quizScore + 1, questionNo: userData.questionNo + 1 })
        } else {

            userRef.update({ questionNo: userData.questionNo + 1 })
        }

    }

    // validateAnswer
    const validateAnswer = () => {
        let status = false
        quiz.answerOptions.forEach((item) => {
            if (item.isCorrect) {
                if (item.answerText === answer) {
                    status = true
                }
            }
        })
        return status
    }

    // Handle Next
    const handleNext = () => {
        console.log(user.questionNo)
        if (answer != null) {
            setLoading(true)
            let status = validateAnswer()

            if (status) {
                handleQuiz(true)
            } else {
                handleQuiz(false)
            }

        } else {
            handleQuiz(false)
        }

        if (user.questionNo < 5) {

            setAnswer(null)
            setQuiz(null)
            getUserData()
        } else {
            endQuiz()
        }
    }


    // Handle End Quiz
    const endQuiz = () => {

    }


    const value = {
        quiz, setQuiz, handleAnswer, answer, handleNext
    }



    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;

}