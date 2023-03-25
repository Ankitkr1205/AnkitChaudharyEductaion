import React from "react";
import india from './india.png'

function FallBack() {
  return (
    <div>
      <h1>My Image</h1>
      <img src={india} alt="My Image" />
    </div>
  );
}

export default FallBack;
