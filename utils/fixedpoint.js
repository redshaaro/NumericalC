export default function fixedpoint(eqStr, x0, tol, n) {
  // Step 1: Modify the equation into JS-compatible syntax
  const modifiedEq = eqStr.replace(/([a-zA-Z0-9])\^/g, "$1**");

  // Step 2: Define eq1 and eq2 as functions
  const eq1 = new Function("x", `return ${modifiedEq}`);
  const g = (x) => eq1(x) + x;

  let x = x0;
  for (let i = 0; i < n; i++) {
    const prevX = x;
    x = g(x);

    // Check for convergence
    if (Math.abs(x - prevX) < tol) {
      return x;
    }
  }
  console.log(x);

  // If the iteration did not converge within n iterations, return null to indicate failure
  return null;
}
