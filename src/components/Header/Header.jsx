import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
  const history = useHistory()
  const { user, handleSignout, isAuth } = useContext(AuthContext)
  return (
    <div className="w-full h-32 lg:h-48 flex items-center justify-between ">
      {/* Logo */}
      <div className="w-14 h-14 rounded-full bg-l-col flex items-center justify-end ">
        <div className="bg-primary-col w-8 h-8 rounded-full mr-6px"></div>
      </div>
      {/* Quiz */}
      <div className="flex items-center justify-center ">
        <span onClick={() => { isAuth?history.push("/quiz"):history.push("/signin") }} className="cursor-pointer font-Cormorant-Unicase text-2xl font-normal">{user ? user.name.split(" ")[0] : "Signin"}</span>
      </div>
    </div>
  );
}
