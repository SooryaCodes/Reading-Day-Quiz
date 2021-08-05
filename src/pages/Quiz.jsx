import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import QuizComp from "../components/Quiz/Quiz"
import firebase from "../config/firebase"
import { AuthContext } from '../contexts/AuthContext'
import { QuizContext } from '../contexts/QuizContext'

export default function Quiz() {
    const { status, setStatus } = useContext(QuizContext)

    useEffect(() => {
        let quizCompleted = localStorage.getItem("quiz")

        if (quizCompleted === "completed") {
            setStatus(true)
        } else {
            setStatus(false)
        }
    })
    return (
        <>
            {status ? (<Redirect to="/profile" />) : (<QuizComp />)}
        </>
    )
}
