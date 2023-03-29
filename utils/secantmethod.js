export default function secantMethod(eqStr, a, b, tol) {
  const eq = new Function("x", `return ${eqStr};`);
  const iterations = Math.round(Math.log((b - a) / tol) / Math.log(2));
  let c = (b - eq(b) * ((b - a) / (eq(b) - eq(a)))).toFixed(4);
  let fqA = eq(a);
  let fqB = eq(b);
  let fqC = eq(c);
  let i = 0;
  while (i !== iterations && Math.abs(fqC) >= tol) {
    a = b;
    b = c;
    c = (b - eq(b) * ((b - a) / (eq(b) - eq(a)))).toFixed(4);
    fqA = fqB;
    fqB = fqC;
    fqC = eq(c);
    i += 1;
  }
  console.log(c);
  return c;
}