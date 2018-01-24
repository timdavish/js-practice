/*
 * Given a positive integer n written as abcd... (a, b, c, d... being digits)
 * and a positive integer p we want to find a positive integer k, if it exists,
 * such as the sum of the digits of n taken to the successive powers of p is
 * equal to k * n.
 */
export default function digPow (n, p) {
  const sum = String(n).split('').reduce((total, num, i) => total + Math.pow(num, p + i), 0)
  const k = sum / n
  return Number.isInteger(k)
    ? k
    : -1
}
