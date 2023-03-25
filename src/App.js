import { React, useState } from "react";
import "./App.css";

export const Loader = () => {
  console.log("-------");
  return <div className="loader"></div>;
};

const App = () => {
  const [isLoader, setIsLoader] = useState(false);
  const [data, setData] = useState("");
  const handleLoader = () => {
    console.log("Loader");
    setIsLoader(!isLoader);
  };
  const handleClick = () => {
    const inputValue = prompt("Enter any string");
    setData(inputValue);
  };
  return (
    <div>
      {isLoader ? <Loader /> : <h1>I have been loaded</h1>}
      <button onClick={handleLoader} style={{ backgroundColor: "green" }}>
        {isLoader ? "Hide" : "Show"}
      </button>
    </div>
  );
};
export default App;
