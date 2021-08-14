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
import Private from "./components/Private/Private"
import Profile from "./pages/Profile";
import Error from "./components/Error/Error";
import PrivateAuth from "./components/Private/PrivateAuth"
import Share from "./components/Share/Share"
import Result from "./components/Result/Result";

const App = () => {
  const history = useHistory();
  const { loading, user } = useContext(AuthContext)
  useEffect(() => {
    var mq = window.matchMedia("(max-width: 3000px)");
    if (mq.matches) {
    }
    else {
      history.push("/info")
    }
  })
  return (
    <>
      {loading && <Loader />}
      <Switch  >
        {/* Home */}
        <Route path="/" exact component={Home} />

        {/* Signup */}
        <PrivateAuth path="/signup"  >
          <SignUp />
        </PrivateAuth>


        {/* Signin */}
        <PrivateAuth path="/signin"  >
          <SignIn />
        </PrivateAuth>

       <Route path="/result" component={Result}/>

        {/* Quiz */}
        <Private path="/quiz"  >
          <Quiz />
        </Private>

        {/* Profile */}
        <Private path="/profile"  >
          <Profile />
        </Private>

        {/* Share */}
        <Private path="/share"  >
          <Share />
        </Private>

 {/* Info */}
 <Route path="/info"  >
          <Error desktop />
        </Route>

        <Route pnf={true}><Error /></Route>

      </Switch>


    </>

  );
};

export default App;
