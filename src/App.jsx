import React, { useContext, useEffect } from "react";
import "./tailwind.css";
import 'remixicon/fonts/remixicon.css'
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Home from "./pages/Home"
import SignUp from "./pages/Signup"
import { AuthContext } from "./contexts/AuthContext";
import SignIn from "./pages/SignIn"
import Loader from "./components/Loader/Loader"
import Quiz from "./pages/Quiz"
import Add from "./components/Add/Add";
import Private from "./components/Private/Private"
import Profile from "./pages/Profile";
import Error from "./components/Error/Error";
import PrivateAuth from "./components/Private/PrivateAuth"

const App = () => {
  const history = useHistory();
  const { loading, user } = useContext(AuthContext)
  return (
    <>
      {loading && <Loader />}

      <Switch  >
        {/* Home */}
        <Route path="/" exact component={Home} />

        {/* Signup */}
        <Private  path="/signup"  >
          <SignUp />
        </Private>


        {/* Signin */}
        <Private  path="/signin"  >
          <SignIn />
        </Private>


        {/* Quiz */}
        <Private path="/quiz"  >
          <Quiz />
        </Private>

        {/* Profile */}
        <Private path="/profile"  >
          {console.log("Hey")}
        {console.log("Profile Section")}
          <Profile />
        </Private>


        {/* Add */}
        <Route path="/error">
          <Error />
        </Route>

      </Switch>

    </>

  );
};

export default App;
