import React, { useState } from "react";

const HooksUseState = () => {
  const [name, setName] = useState();

  return (
    <div>
      <h1>{name}</h1>
      <button
      onClick={()=>{setName("ankit")}}
      >UPDATE</button>
      <button
      onClick={()=>{setName()}}
      >REfresh</button>
    </div>
  );
};
export default HooksUseState;
