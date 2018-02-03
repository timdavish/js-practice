const answer = sumMultiplesOf(1000, [3, 5])
// answer = 233168

function sumMultiplesOf (bound, divisors) {
  let sum = 0

  for (let i = 1; i < bound; i++) {
    if (divisors.some(d => i % d === 0)) {
      sum += i
    }
  }

  return sum
}
