// src/App.tsx
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>Click the buttons to change the count.</p>
      <p>Current count: {count}</p>
    </>
  );
}

export default App;
