/*
 * Write a function that takes in a positive parameter num and returns its
 * multiplicative persistence, which is the number of times you must multiply
 * the digits in num until you reach a single digit.
 */
export default function persistentBugger (num) {
  let count = 0

  while (num.length > 1) {
    num = String(num).split('').reduce((total, num) => total * num, 1)
    count++
  }

  return count
}
