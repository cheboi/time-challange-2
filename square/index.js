// Given a non-negative integer x,
// return the square root of x rounded down to the nearest integer.
// The returned integer should be non-negative as well.

var isSquare = function (n) {
  if (n < 0) {
    return false;
  }
  else  {
    let x = Math.sqrt(n);
    result = Math.floor(x);
    return  result;
  }
};

console.log(isSquare(8));
