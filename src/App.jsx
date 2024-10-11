import s from "./App.module.css";
import Riddler from "./Riddler/Riddler";
import { questions } from "./Questions";
import { useState } from "react";

function App() {
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [hide, setHide] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const checkAnswer = (answer) => {
    if (
      !currentQuestion.correctAnswer ||
      !Array.isArray(currentQuestion.correctAnswer)
    ) {
      console.error("No correctAnswers array found for this question");
      return;
    }
    const normalizedAnswer = answer.trim().toLowerCase();
    const correctAnswer = currentQuestion.correctAnswer.map((ans) =>
      ans.toLowerCase()
    );

    if (correctAnswer.includes(normalizedAnswer)) {
      setUserAnswer("");
      alert(currentQuestion.alert);
      if (currentQuestion.id === 12) {
        alert(
          "The test is over, I want to eat some candies or scare some children, whatever, now go and look for treasures"
        );
      }
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

  // const handleButtonClick = (answer) => {
  //   checkAnswer(answer);
  // };

  const handleSubmit = () => {
    checkAnswer(userAnswer);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      checkAnswer(userAnswer);
    }
  };

  const handleBye = () => {
    setHide(true);
  };

  return (
    <div className={s.wrap}>
      {hide ? (
        <div>
          <img
            className={s.patch}
            src="../bubbles/patch.png"
            width="1500px"
            height="1100px"
          />
          <img className={s.end} src="../bubbles/fin_bubble.png" />
        </div>
      ) : (
        <div>
          <img
            className={s.image}
            src={currentQuestion.image}
            alt="Question bubble"
          />
          <Riddler />
          {currentQuestion.type === "input" ? (
            <div>
              <p className={s.label}>Dare to answer here...</p>
              <input
                className={s.input}
                type="text"
                id="answer"
                value={userAnswer}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <button className={s.button} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          ) : (
            <button className={s.fin} onClick={handleBye}>
              Bye!
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
