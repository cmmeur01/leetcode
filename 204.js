// Count the number of prime numbers less than a non-negative number, n.

function countPrimes(n) {
  n--;
  let count = 0;
  while (n > 1) {
    if (isPrime(n)) count++;
    n--;
  }
  return count;
}

function isPrime(num) {
  if (num <= 3) {
    if (num <= 1) {
      return false;
    } else {
      return true;
    }
  } else if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i ** 2 <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}