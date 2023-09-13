import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  let handlePlus = () => {
    setCounter((previous) => {
      return previous + 1;
    });
  };
  let handleMinus = () => {
    setCounter((previous) => {
      if (previous > 0) {
        return previous - 1;
      } else {
        return previous;
      }
    });
  };

  return (
    <div className="counter">
      <p>{counter}</p>
      <button className="button1" onClick={handlePlus}>
        Increment
      </button>
      <button className="button2" onClick={handleMinus}>
        Decrement
      </button>
    </div>
  );
}

export default App;
