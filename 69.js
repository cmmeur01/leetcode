// Compute and return the square root of x, where x is guaranteed to be a non - negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.


var mySqrt = function (x) {
  for (i = 0; i <= x; i++) {
    if (i**2 <= x && (i + 1)**2 > x) return i;
  }
};