import { derivative } from "mathjs";

export default function newtonraphson(eqStr, a, b, tol) {
  try {
    const der = derivative(eqStr, "x").toString();
    const dereq = new Function("x", `return ${der}`); //The first derivative equation
    const modifiedEqu = eqStr.replace(/([a-zA-Z0-9])\^/g, "$1**"); //modifing the equation back to js rules
    const eq = new Function("x", `return ${modifiedEqu}`); //normal function
    let xi = a;
    let funX = eq(xi);
    let derfunX = dereq(xi);
    console.log(xi, funX, derfunX);
    while (Math.abs(eq(xi)) > tol) {
      xi = xi - eq(xi) / dereq(xi);
      funX = eq(xi);
      derfunX = dereq(xi);
    }
    return xi.toFixed(4);
  } catch (err) {
    console.log(err);
  }
}
