import React, { useEffect, useState } from "react";
import firebase from "../../config/firebase";

export default function Add() {
  useEffect(async () => {
    let ref = await firebase.firestore().collection("quiz").get();
    let quiz = ref.docs.map((doc) => doc.data());
    console.log(quiz);
  }, []);
  return <div></div>;
}
