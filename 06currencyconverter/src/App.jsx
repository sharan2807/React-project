import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputBox from "./components/InputBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/03/98/72/60/1000_F_398726020_osA2T853Y6ZDfRUOqfNCo6yhZ8MUQew4.jpg)`,
      }}
    >
      <InputBox />
    </div>
  );
}

export default App;
