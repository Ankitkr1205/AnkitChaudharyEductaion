import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FunctionSection from "./Components/JonasJS/Function";
import reportWebVitals from "./reportWebVitals";
import NavbarHeader from "./Components/Navbar/Index";
import HooksUseState from "./Components/Hooks/Usestate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <HooksUseState /> */}
    <App />
    {/* <NavbarHeader />
    <FunctionSection /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
