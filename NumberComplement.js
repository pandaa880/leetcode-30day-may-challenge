/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let n = num
  let power_count = 0
  let decimalValue = 0

  // convert to binary and complement it
  while (n > 0) {
    // take the remainder
    let remainder = n % 2
    // divide number by 2 to get next number
    n = Number.parseInt(n / 2)
    // store the complemented bit
    const complemented_remainder = remainder === 0 ? 1 : 0
    // calculate decimal value at each bit
    decimalValue += Math.pow(2, power_count) * complemented_remainder
    power_count++
  }

  console.log(result, decimalValue)

  return decimalValue
}

// * Number().toString() takes a radix base as param and will return a string according to given base, and if not provided then defaults to 10
// solution from leetcode
// var findComplement = function (num) {
//   let result = ""
//   const binary = num.toString(2)

//   for (let i = 0; i < binary.length; i++) {
//     if (binary[i] === "1") result += "0"
//     else result += "1"
//   }

//   console.log(parseInt(result, 2))
//   return parseInt(result, 2)
// }

findComplement(5)
findComplement(294)
