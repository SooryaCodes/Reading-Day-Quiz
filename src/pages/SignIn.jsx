import React, { useContext, useEffect, useState } from 'react'
import SignIn from "../components/SignIn/SignIn"
import { AuthContext } from "../contexts/AuthContext"

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const { handleSignin, loading, setLoading } = useContext(AuthContext)
    //validate form
    const validateForm = (e) => {
        e.preventDefault()

        //validating email
        const re =
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const emailStatus = re.test(email);
        if (password.length < 6) {
            setErr("password")
        } else if (!emailStatus) {
            setErr("email")
        }
        else {
            setErr("")
            setLoading(true)
            handleSignin(email, password)
        }
    }

    return (
        <SignIn data={[email, setEmail, password, setPassword, err, setErr, validateForm]} />
    )
}
