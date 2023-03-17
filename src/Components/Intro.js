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
    {
      isLoader ? <Loader /> : <h1>123</h1>;
    }
    setIsLoader(!isLoader);
  };
  const handleClick = () => {
    const inputValue = prompt("Enter any string");
    setData(inputValue);
  };
  return (
    <div>
      {/* <div>
        <form>
          <label>Username</label>
          <input type="text" />
          <label>Password</label>
          <input type="Password" />
          <button
            onClick={() => {
              alert("i am clicked");
            }}
          >
            Submit
          </button>
        </form>
      </div> */}
      {/* <div>
        <form>
          <label className="abc">First name</label>
          <input type="text" id="fname" name="fname" value="John" />
          <br />
          <label>Last name</label>
          <input type="text" id="lname" name="lname" value="Doe" />
          <br />
          <button style={{ color: "red" }}>SUBMIT</button>
        </form>
      </div> */}
      <button
        style={{
          backgroundColor: "blue",
          border: "none",
          color: "white",
          padding: "10px 20px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onClick={handleClick}
      >
        Click me
      </button>
      <br />
      <h1>{data}</h1>
      <button
        style={{
          backgroundColor: "red",
          border: "none",
          color: "white",
          padding: "10px 20px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onClick={() => setData()}
      >
        Clear
      </button>
    </div>
  );
};
export default App;

// fix this code ?
