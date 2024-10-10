import "./App.css";
import Riddler from "./Riddler/Riddler";
import { questions } from "./Questions";
import { useState } from "react";
import Bubble from "./Bubble/Bubble";

function App() {
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const currentQuestion = questions[currentQuestionIndex];

  const checkAnswer = (answer) => {
    if (currentQuestion.correctAnswer.includes(answer)) {
      alert("Correct!");
      setUserAnswer("");
      if (currentQuestionIndex < questions.length - 1) {
        setcurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert("Congratulations! You finished the quiz!");
      }
    } else {
      alert("WRONG!");
    }
  };

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleButtonClick = (answer) => {
    checkAnswer(answer);
  };

  const handleSubmit = () => {
    checkAnswer(userAnswer);
  };

  return (
    <>
      <img src={currentQuestion.image} alt="Question bubble" />
      {/* <Bubble text={currentQuestion.text} /> */}
      <Riddler />
      {currentQuestion.type === "input" ? (
        <div>
          <input type="text" value={userAnswer} onChange={handleInputChange} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>Hi</div>
      )}
    </>
  );
}

export default App;
