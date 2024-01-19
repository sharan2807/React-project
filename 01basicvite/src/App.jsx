import { useState } from "react";

function App() {
  const [count, setCount] = useState(15);

  const addHandler = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const reduceHandler = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Vite React App</h1>
      <h2>Count value: {count}</h2>
      <button onClick={addHandler}>Add value</button>{" "}
      <button onClick={reduceHandler}>Reduce value</button>
    </>
  );
}

export default App;
