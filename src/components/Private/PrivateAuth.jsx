import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Private({ children, auth, ...rest }) {
    let isAuth = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth ? (
                    <Redirect
                        to={`/`}
                    />

                ) : (
                    children
                )
            }
        />

    )

}

export default Private