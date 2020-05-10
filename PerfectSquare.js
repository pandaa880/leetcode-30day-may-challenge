/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  const shouldEnd = { 1: 1, 4: 4, 5: 5, 6: 6, 9: 9 }
  const shouldntEnd = { 2: 2, 3: 3, 7: 7, 8: 8 }
  const validDigitalRoots = { 1: 1, 4: 4, 7: 7, 9: 9 }

  const lastDigit = num % 10
  const tensDigit = Number.parseInt((num % 100) / 10)
  if (shouldntEnd[lastDigit] !== undefined) {
    // console.log("false")
    return false
  }

  if (shouldEnd[lastDigit] !== undefined) {
    const digitalRoot = calculateDigitalRoot(num)
    // console.log("Digital Root is", digitalRoot)
    if (validDigitalRoots[digitalRoot] === undefined) {
      console.log(false)
      return false
    } else {
      // console.log("more checks", validDigitalRoots[digitalRoot])

      if (lastDigit === 5 && tensDigit !== 2) {
        console.log(false)
        return false
      }

      if (lastDigit === 6 && tensDigit % 2 === 0) {
        // console.log("false")
        return false
      } else if (lastDigit !== 6 && tensDigit % 2 === 1) {
        console.log("false")
        return false
      }

      if ((num % 100) % 2 === 0) {
        if ((num % 100) % 4 === 1) {
          // console.log("false")
          return false
        }
      }
      // TODO: need to add one more check for even numbers of zeros & prime factors
      return true
    }
  }
}

function calculateDigitalRoot(n) {
  let number = n
  let sum = 0
  while (number > 0) {
    sum += number % 10
    // console.log(number, sum)
    number = Number.parseInt(number / 10)
  }

  if (sum > 9) {
    sum = calculateDigitalRoot(sum)
  }

  return sum
}

isPerfectSquare(15763530163289)
// isPerfectSquare(15626)
// isPerfectSquare(16)
// isPerfectSquare(4539)
