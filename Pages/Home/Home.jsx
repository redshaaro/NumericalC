import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const Methods = [
    { Name: "Secant", Link: "/Secant" },
    { Name: "Modified Secant", Link: "/MSecant" },
    { Name: "FixedPoint", Link: "/FixedPoint" },
    { Name: "Newton Raphson", Link: "/NewtonRaphson" },
  ];

  return (
    <>
      <div className="HomeTitleContainer">
        <div className="HomeTitleContainerLine"></div>
        <div className="HomeTitleContainerTitle">
          Welcome To Numerical{" "}
          <span className="HomeTitleContainerSpecialText">C</span>
        </div>
        <div className="HomeTitleContainerLine"></div>
      </div>
      <div className="HomeChoice">Choose The Method</div>
      <div className="HomeMethodsContainer">
        {Methods.map((method, i) => (
          <Link className="MethodLink" to={method.Link} key={i}>
            <div className="HomeMethod">
              <span>{method.Name}</span>
            </div>
          </Link>
        ))}
        
      </div>
      <div class="typing-animation">
          <p>
            Hello there, just a small note: Equations are written in this form
            2*x^2-2*x-3 enjoy it !
          </p>
        </div>
    </>
  );
};

export default Home;
