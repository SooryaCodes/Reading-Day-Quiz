import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import ProfileComp from "../components/Profile/Profile"
import { AuthContext } from '../contexts/AuthContext'
import { QuizContext } from '../contexts/QuizContext'

export default function Profile() {
    const { status, setStatus } = useContext(QuizContext)
const {setLoading} = useContext(AuthContext)
    useEffect(() => {
        let quizCompleted = localStorage.getItem("quiz")

        if (quizCompleted === "completed") {
            setStatus(true)
        } else {
            setStatus(false)
        }
    setLoading(false)

    })

    return (
        <>   
                 {status? (<ProfileComp />) : (<Redirect to="/quiz" />)}    
        </>
    )
}
