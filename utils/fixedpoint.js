export default function fixedPointIteration(eqStr, a, tol, n) {
  try {
    const modifiedEqu = eqStr.replace(/([a-zA-Z0-9])\^/g, "$1**").toLowerCase();
    const eq = new Function("x", `return ${modifiedEqu}`);

    let xi = a;
    let funX = eq(xi);
    let gx = (x) => Number(eq(x)) + Number(x);
    let funGx = gx(xi);

    for (let i = 0; i < n && Math.abs(funX) > tol; i++) {
      if (i === n) {
        break;
      }
      xi = gx(xi);
      funX = eq(xi);

      console.log(xi);
    }

    return xi;
  } catch (err) {
    console.log(err);
  }
}
