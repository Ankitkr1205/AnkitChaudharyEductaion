import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    // <div>
    //   <form>
    //     <label>Username</label>
    //     <input type="text" />
    //     <label>Password</label>
    //     <input type="Password" />
    //     <button
    //       onClick={() => {
    //         alert('i am clicked')
    //       }}
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <div>
      <form>
        <label className="abc">First name</label>
        <input type="text" id="fname" name="fname" value="John" />
        <br />
        <label>Last name</label>
        <input type="text" id="lname" name="lname" value="Doe" />
        <br />
        <button style={{ color: "red" }}>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
