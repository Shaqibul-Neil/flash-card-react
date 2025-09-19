import Question from "./Question";
import { useState } from "react";

const questions = [
  {
    id: 3457,
    query: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    query: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    query: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    query: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    query: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    query:
      "What do we call an input element that is completely synchronized with state?",
    answer: "Controlled element",
  },
];
const Questions = () => {
  const [isOpenID, setIsOpenID] = useState(null);
  const handleClick = (id) => {
    setIsOpenID(isOpenID === id ? null : id);
  };
  return (
    <div className="questions">
      {questions.map((question, i) => (
        <Question
          question={question}
          key={i}
          isOpenID={isOpenID}
          setIsOpenID={setIsOpenID}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Questions;
