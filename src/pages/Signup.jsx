import React, { useContext, useEffect, useState } from 'react'
import SignUp from "../components/SignUp/SignUp"
import { AuthContext } from "../contexts/AuthContext"

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const { handleSignup, loading, setLoading } = useContext(AuthContext)
    //validate form
    const validateForm = (e) => {
        e.preventDefault()

        //validating email
        const re =
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const emailStatus = re.test(email);

        if (name.length < 3) {
            setErr("name")
        } else if (password.length < 6) {
            setErr("password")
        } else if (!emailStatus) {
            setErr("email")
        }
        else {
            setErr("")
            setLoading(true)
            handleSignup(name, email, password)
        }
    }

    return (
        <SignUp data={[name, setName, email, setEmail, password, setPassword, err, setErr, validateForm]} />
    )
}
