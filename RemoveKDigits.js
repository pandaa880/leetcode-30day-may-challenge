/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  if (num.length === k) {
    return "0"
  }

  let min = Number.parseInt(num.substring(k), 10)

  let window_min = min
  let p = k
  for (let i = k; i < num.length; i++) {
    console.log(`i -> ${i} & p -> ${p}`)
    window_min = num.substring(0, i - k + 1) + num.substring(p + 1)

    if (Number.parseInt(window_min, 10) < min) {
      min = Number.parseInt(window_min, 10)
    }
    p++
    console.log(window_min)
  }

  console.log(min.toString())
  return min.toString()
}

removeKdigits("5337", 2)
// removeKdigits("1432219", 3)
// removeKdigits("10200", 1)
// removeKdigits("10", 2)
