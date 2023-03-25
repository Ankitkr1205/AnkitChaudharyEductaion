import React, { useState } from "react";
import "../JonasJS/Function.css";
import { MdAutoDelete } from "react-icons/md";

const FunctionSection = () => {
  const pim = (primary, supplement) => {
    const catalog = `Total primary Catalog is ${primary}, and supplement is ${supplement}`;
    return catalog;
  };

  const [result, setResult] = useState("");

  const uservalue = () => {
    console.log("I am userValue");
    const pricat = prompt(
      "Enter how many Primary catalogue You want to create"
    );
    const suppcat = prompt(
      `Enter No of Supplemet catalog for ${pricat} You want to create`
    );
    const noOfP = pricat;
    const noOfS = suppcat;
    const resultCatalog = pim(noOfP, noOfS);
    setResult(resultCatalog);
    console.log(resultCatalog);
  };

  return (
    <>
      <div className="one">Function section 1</div>
      <button className="glow-on-hover" onClick={uservalue}>
        Create Catalogue
      </button>
      <h1 className="header">{result}</h1>
      <button onClick={() => setResult()}>
        <MdAutoDelete />
      </button>
    </>
  );
};

export default FunctionSection;
