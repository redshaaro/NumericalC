import { derivative } from "mathjs";

export default function newtonraphson(eqStr, a, b, tol) {
  try {
    const der = derivative(eqStr, "x").toString();
    const modifiedDer = der.replace(/\^/g, "**"); // replace '^' with '**'
    const dereq = new Function("x", `return ${modifiedDer}`);

    const modifiedEqu = eqStr.replace(/\^/g, "**").toLowerCase(); //modifying the equation back to js rules

    const eq = new Function("x", `return ${modifiedEqu}`); //normal function
    let xi = a;
    let funX = eq(xi);
    let derfunX = dereq(xi);
    
     

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
