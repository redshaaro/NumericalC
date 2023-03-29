import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import FixedPoint from "../Pages/FixedPoint/FixedPoint";

import MSecant from "../Pages/MSecant/MSecant";
import NewtonRaphson from "../Pages/NewtonRaphson/NewtonRaphson";
import Secant from "../Pages/Secant/Secant";
import ContactMe from "../Pages/ContactMe/ContactMe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/FixedPoint" element={<FixedPoint></FixedPoint>}></Route>
        <Route path="/MSecant" element={<MSecant></MSecant>}></Route>
        <Route
          path="/NewtonRaphson"
          element={<NewtonRaphson></NewtonRaphson>}
        ></Route>
        <Route path="/Secant" element={<Secant></Secant>}></Route>
        <Route path="/about" element={<ContactMe></ContactMe>}></Route>
      </Routes>
    </>
  );
}

export default App;
