import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import ProfileComp from "../components/Profile/Profile"
import { QuizContext } from '../contexts/QuizContext'

export default function Profile() {
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
                 {status? (<ProfileComp />) : (<Redirect to="/quiz" />)}    
        </>
    )
}
