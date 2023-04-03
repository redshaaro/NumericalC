import React, { useState } from "react";
import fixedpoint from "../../utils/fixedpoint";
import "./FixedPoint.css";

const FixedPoint = () => {
  const [equation, setEquation] = useState("");
  const [a, setA] = useState("");
  const [iterations, setIterations] = useState("");
  const [tolerance, setTolerance] = useState("");
  const [output, setOutput] = useState(" ");
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!equation || !a || !iterations || !tolerance) {
      setError(true);
    } else {
       
      setOutput(fixedpoint(equation, a, tolerance, iterations));

      setError(false);
    }
  };
  // console.log(fixedpoint("x^2-3", 1, 0.01, 5));

  return (
    <>
      <h1 className="SecantTitle">FixedPointMethod</h1>

      <form className="SecantForm" onSubmit={submitHandler}>
        <label>Enter Equation</label>
        <input
          className="SecantInput"
          type="text"
          onChange={(e) => {
            setEquation(e.target.value);
          }}
          placeholder="x ^ 2 + 2 * x - 3"
        />

        <label>Enter X0</label>
        <input
          className="SecantInput"
          onChange={(e) => {
            setA(e.target.value);
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
        <label>Number of repetetions</label>
        <input
          className="SecantInput"
          onChange={(e) => {
            setIterations(e.target.value);
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

export default FixedPoint;
