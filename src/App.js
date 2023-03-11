// https://opentdb.com/api.php?amount=5&type=multiple

import "./App.css";
import { useState } from "react";

import IntroPage from "./components/intro/IntroPage";
import QuizQs from "./components/quiz/QuizQs";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);

  function startQuiz() {
    setShowIntro(false);
    setShowQuiz(true)
  }
  function playAgain(){
    setShowIntro(true);
    setShowQuiz(false);
  }

  return (
    <div className="container">
      {showIntro && <div className="introPage">
       <IntroPage startQuiz={startQuiz}/>
      </div>}
      
        {showQuiz && 
        <div className="quizPage">
        <QuizQs
        playAgain={playAgain} />
        </div>}
      
    </div>
  );
}
