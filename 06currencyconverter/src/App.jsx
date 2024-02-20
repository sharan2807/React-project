import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-vector/digital-global-currency-icons-concept-background_1017-17455.jpg)`,
      }}
    >
      <h1 className="bg-red-200">Test for Tailwind</h1>
    </div>
  );
}

export default App;
