export default function secantMethod(eqStr, a, b, tol) {
  const modifiedEqu = eqStr.replace(/([a-zA-Z0-9])\^/g, "$1**").toLowerCase() //modifing the equation back to js rules
  const eq = new Function("x", `return ${modifiedEqu}`);
  const iterations = Math.round(Math.log((b - a) / tol) / Math.log(2));
  let c = (b - eq(b) * ((b - a) / (eq(b) - eq(a)))).toFixed(4);
  let fqA = eq(a);
  const fqB = eq(b);
  let fqC = eq(c);
  let i = 0;
  while (i !== iterations && Math.abs(fqC) >= tol) {
    a = c;

    c = (b - eq(b) * ((b - a) / (eq(b) - eq(a)))).toFixed(4);
    fqA = fqC;

    fqC = eq(c);
    i += 1;
  }
  console.log(c);
  return c;
}
