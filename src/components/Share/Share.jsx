import React, { useContext, useEffect, useRef } from "react";
import "@lottiefiles/lottie-player";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import firebase from "../../config/firebase"
import html2canvas from 'html2canvas';

export default function Profile() {
  const history = useHistory();
const shareTarget = useRef(null)
const btn = useRef(null)
  const { user, setUser } = useContext(AuthContext);
  
  
  async function onShare(shareTarget) {
    if (!shareTarget.current) {
      return;
    }
    const canvas = await html2canvas(shareTarget.current);
    const dataUrl = canvas.toDataURL();
    const blob = await (await fetch(dataUrl)).blob();
    const filesArray = [new File([blob], 'result.png', { type: blob.type, lastModified: new Date().getTime() })];
    const shareData = {
      files: filesArray,
    };
    navigator.share(shareData).then(() => {
      history.push("/profile")
    });
    
  }
  useEffect(async () => {
    if (user) {
      let ref = await firebase.firestore().collection("users").where("uid", "==", user.uid).get();
      let userRef = ref.docs.map((doc) => doc.data())[0]
      setUser(userRef)
    }
    btn.current.click()
  }, [])

  return (
    <>
    <div className="w-full h-screen bg-indigo-500 relative font-Roboto flex items-center justify-center" >

    <div
    ref={shareTarget}
    className="w-full bg-white  rounded-b-none  flex flex-col items-center justify-start"
    style={{ height: "500px" }}
  >
    <lottie-player
      src="https://assets4.lottiefiles.com/packages/lf20_8iczykai.json"
      loop
      background="transparent"
      speed="1"
      style={{ width: "320px", height: "320px", marginTop: "-40px" }}
      autoplay
    ></lottie-player>
    <div className="-mt-8 flex flex-col items-center justify-start">
      <p className="text-xl font-medium " style={{ color: "#33365c" }}>
        Congrats {user?.name.split(" ")[0]}
      </p>
      <p
        className="text-center text-sm px-10 pt-1 font-medium font-Mulish"
        style={{ color: "#4c4f6e" }}
      >
        <strong>Hurreh! </strong> you have successfully completed the
        Reading-Day-Quiz.
      </p>

      <p
        className="pt-5 tracking-wider text-sm"
        style={{ color: "#505d86" }}
      >
        YOUR SCORE
      </p>
      <p
        className="text-3xl pt-2 font-semibold"
        style={{ color: "#323a53" }}
      >
        {user?.score}/20
      </p>
    </div>
</div>
  </div>
  <button ref={btn} hidden onClick={onShare.bind(onShare, shareTarget)}></button>
  </>
  );
}
