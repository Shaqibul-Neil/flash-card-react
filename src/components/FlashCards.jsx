//import FlashCard from "./FlashCard";
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

const FlashCards = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  };

  return (
    <div className="flashcards">
      {/* {questions.map((question) => (
        <FlashCard
          key={question.value}
          question={question}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))} */}
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(question.id)}
        >
          <p>{question.id === selectedId ? question.answer : question.query}</p>
        </div>
      ))}
    </div>
  );
};

export default FlashCards;
