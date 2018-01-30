/**
 * Given a range, return the count of upside down numbers within that range.
 */
export default function solve (x, y) {
  const keys = { '6': '9', '9': '6' }

  let count = 0

  for (let num = x; num < y; num++) {
    const string = num.toString()
    if (
      !string.includes('2') &&
      !string.includes('3') &&
      !string.includes('4') &&
      !string.includes('5') &&
      !string.includes('7') &&
      string === string.split('').reverse().join('').replace(/6|9/g, matched => keys[matched])
    ) { count++ }
  }

  return count
}
