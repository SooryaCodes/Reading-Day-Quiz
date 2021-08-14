import React, { useEffect, useState } from "react";
import firebase from "../../config/firebase";

export default function Result() {
  const [result, setResult] = useState([]);

  useEffect(async () => {
    let data  = await firebase
      .firestore()
      .collection("users")
      .get()
      console.log(data)
    let details = data.docs.map((doc) => doc.data()).filter((item)=>item.score===6)
    
    setResult(details)
  },[]);
  return (
    <div className="flex flex-wrap">
        {console.log(result,"result")}
      {result.map((item) => (
        <div className="p-5 shadow-lg m-2">
          <h1>Name : {item.name}</h1>
          <p>Score : {item.score}</p>
        </div>
      ))}
    </div>
  );
}
