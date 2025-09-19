import { useState } from "react";

const DateCounter = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setStep((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setStep((prev) => prev - 1);
  };

  const handleIncreaseCount = () => {
    setCount((prev) => prev + step);
  };
  const handleDecreaseCount = () => {
    setCount((prev) => prev - step);
  };

  return (
    <div className="container">
      <div className="stepCounter">
        <button onClick={handleDecrease}>-</button>
        <p>Step: {step}</p>
        <button onClick={handleIncrease}>+</button>
      </div>
      <div className="stepCounter">
        <button onClick={handleDecreaseCount}>-</button>
        <p>Count: {count}</p>
        <button onClick={handleIncreaseCount}>+</button>
      </div>
      <p></p>
    </div>
  );
};

export default DateCounter;
