import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import firebase from "../../config/firebase";
import { QuizContext } from "../../contexts/QuizContext";
import Timer from "../Timer/Timer";

export default function Quiz() {
  const { quiz, setQuiz, handleAnswer, answer, handleNext } =
    useContext(QuizContext);
  const { user, setLoading, score, setScore } = useContext(AuthContext);
  const [test, setTest] = useState(false);

  const getUserData = async () => {
    let ref = await firebase
      .firestore()
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    let userRef = ref.docs.map((doc) => doc.data())[0];
    setScore(userRef.score);
  };

  const onEnd = (end) => {
    handleNext(end);
  };

  useEffect(async () => {
    if (user && quiz === null) {
      let ref = await firebase
        .firestore()
        .collection("quiz")
        .where("id", "==", user.questionNo)
        .get();
      let tempArray = ref.docs.map((doc) => doc.data())[0];
      setQuiz(tempArray);
      setLoading(false);
      getUserData();
    }
  }, [user, answer, quiz, score, test]);

  return (
    <div className="bg-white w-full min-h-screen text-dark-700 px-8 font-Mulish relative">
      {/* Top */}
      <div className="w-full flex items-center justify-between py-8">
        <Link
          to="/"
          className="pointer text-gray-500 transition transition-duration-300 hover:shadow-lg w-10 border rounded-md border-dark h-10 p-3 flex items-center justify-center text-xl border-opacity-10 outline-none"
        >
          <i className="ri-arrow-left-s-line"></i>
        </Link>
        <span className="text-2xl font-bold" style={{ color: "#39395e" }}>
          00:
          {quiz ? <Timer onEnd={onEnd} status={test} /> : "15"}
        </span>
        <span className="w-10 h-10"></span>
      </div>
      <div className="w-full flex flex-col items-start justify-start mt-2">
        {/* Qn */}
        <div className="mb-5">
          <span className="text-xl font-bold " style={{ color: "#39395e" }}>
            {quiz ? quiz.id + "." : null} {quiz?.question}
          </span>
        </div>
        {/* Answers */}
        {quiz?.answerOptions.map((option, index) => (
          <div
            key={option.answerText}
            onClick={() => handleAnswer(index)}
            className={`${
              option.active
                ? "bg-indigo-500 shadow-md text-white"
                : "border border-opacity-10 border-dark text-dark "
            }  pointer mt-5 hover:shadow-md transition transition-duration-300   cursor-pointer rounded-lg h-12 pl-5 bg-white  w-full py-2 flex items-center justify-start outline-none  text-base `}
          >
            {option.answerText}
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-between left-0 absolute bottom-10 px-8">
        <button
          onClick={() => handleNext(true)}
          className="w-1/2 h-12 py-2  transition transition-duration-300 ease-in transform hover:scale-105 outline-none  rounded-md text-indigo-600"
        >
          Quit
        </button>
        <button
          onClick={() => setTest(!test)}
          className="w-1/2 h-12 py-2 focus:ring transition transition-duration-300 ease-in transform hover:scale-105 outline-none  rounded-md bg-indigo-600 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}
