import React, { useState } from "react";
import newtonraphson from "../../utils/newtonraphson";
import "./NewtonRaphson.css";

const NewtonRaphson = () => {
  const [equation, setEquation] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [tolerance, setTolerance] = useState("");
  const [output, setOutput] = useState(" ");
  const [error, setError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!equation || !a || !b || !tolerance) {
      setError(true);
    } else {
      setOutput(newtonraphson(equation, a, b, tolerance));
      setError(false);
    }
  };
   
  


  return (
    <>
      <h1 className="SecantTitle">NewtonRaphsonMethod</h1>

      <form className="SecantForm" onSubmit={submitHandler}>
        <label>Enter Equation</label>
        <input
          className="SecantInput"
          type="text"
          onChange={(e) => {
            setEquation(e.target.value);
          }}
          placeholder="x ** 2 + 2 * x - 3"
        />

        <label>Enter A</label>
        <input
          className="SecantInput"
          onChange={(e) => {
            setA(e.target.value);
          }}
          type="text"
        />
        <label>Enter B</label>
        <input
          className="SecantInput"
          onChange={(e) => {
            setB(e.target.value);
          }}
          type="text"
        />
        <label>Enter Tolerance</label>
        <input
          className="SecantInput"
          onChange={(e) => {
            setTolerance(e.target.value);
          }}
          type="text"
        />
        <input className="SecantSubmit" type="submit" />
      </form>
      <div className="OutPut">
        {error ? (
          <span className="SecantResult">ALL FIELDS ARE REQUIRED</span>
        ) : (
          <div>
            The OutPut Is: <span className="SecantResult">{output}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default NewtonRaphson;
