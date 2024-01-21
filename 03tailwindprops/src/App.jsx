import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>{" "}
      <br />
      <Card name="Sharan" post="Front-End Dev." />
      <br />
      <Card /> <br />
      <Card /> <br />
      <h1 className="text-2xl bg-green-500 p-3 rounded">
        {" "}
        Displaying multiple Cards.{" "}
      </h1>
    </>
  );
}

export default App;
