import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Private({ children, ...rest }) {
  let isAuth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to="/signin"
          />
        )
      }
    />
  );
}

export default Private