import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <button
          onClick={() => setColor("violet")}
          style={{ backgroundColor: "violet" }}
        >
          Violet
        </button>{" "}
        <button
          onClick={() => setColor("indigo")}
          style={{ backgroundColor: "indigo" }}
        >
          Indigo
        </button>{" "}
        <button
          onClick={() => setColor("blue")}
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>{" "}
        <button
          onClick={() => setColor("green")}
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>{" "}
        <button
          onClick={() => setColor("yellow")}
          style={{ backgroundColor: "yellow", color: "grey" }}
        >
          Yellow
        </button>{" "}
        <button
          onClick={() => setColor("orange")}
          style={{ backgroundColor: "orange" }}
        >
          Orange
        </button>{" "}
        <button
          onClick={() => setColor("red")}
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>{" "}
      </div>
    </>
  );
}

export default App;
