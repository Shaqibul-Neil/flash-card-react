import { useState } from "react";

const SliderCounter = () => {
  const [range, setRange] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleRange = (e) => {
    setRange(+e.target.value);
    // console.log(e.target.value);
  };
  const handleInput = (e) => {
    setCounter(+e.target.value);
  };

  const handleCounterIncrease = () => {
    setCounter((prev) => prev + range);
  };
  const handleCounterDecrease = () => {
    setCounter((prev) => prev - range);
  };

  const today = new Date();
  today.setDate(today.getDate() + counter);

  const handleReset = () => {
    setCounter(0);
    setRange(0);
  };

  const getMessage = () => {
    if (counter === 0) return `Today is ${today.toDateString()}`;
    if (counter > 0)
      return `${Math.abs(counter)} days 
          from today will be ${today.toDateString()}`;
    return `${Math.abs(counter)} days ago today was ${today.toDateString()}`;
  };

  return (
    <div className="container">
      <div className="stepCounter">
        <input
          type="range"
          id="points"
          name="points"
          min="0"
          max="10"
          value={range}
          onChange={handleRange}
        ></input>
        <span>Step: {range}</span>
      </div>
      <div className="stepCounter">
        <button onClick={handleCounterDecrease}>-</button>
        <input type="text" value={counter} onChange={handleInput} />
        <button onClick={handleCounterIncrease}>+</button>
      </div>
      <p className="stepCounter">{getMessage()}</p>
      {counter > 0 || range > 0 ? (
        <div className="stepCounter">
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
};

export default SliderCounter;
