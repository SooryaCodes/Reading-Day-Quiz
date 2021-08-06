import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext';

export default function Timer({ status, onEnd }) {
    const [time, setTime] = useState(15)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const downloadTimer = setInterval(function () {
            setTime((currentState) => {
                if (currentState === 0) {
                    if (user.questionNo === 10) {
                        onEnd(true)
                    } else {
                        onEnd(false)
                    }
                    return currentState

                } else {
                    return currentState - 1
                }
            })
    
        }, 1000);



        return () => {
            clearInterval(downloadTimer);
            if (user.questionNo === 10) {
                onEnd(true)
            } else {
                onEnd(false)
            }
        }
    }, [status])


    return (
        <span>{time}</span>
    )
}
