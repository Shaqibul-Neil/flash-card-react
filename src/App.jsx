import "./App.css";
import FlashCards from "./components/FlashCards";
import Questions from "./components/Questions";
import DateCounter from "./components/DateCounter";
import SliderCounter from "./components/SliderCounter";

function App() {
  return (
    <div>
      <FlashCards />
      <Questions />
      <DateCounter />
      <SliderCounter />
    </div>
  );
}

export default App;
