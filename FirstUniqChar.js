/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let resultIndex = -1
  console.time("timer")
  for (let i = 0; i < s.length; i++) {
    const c = new RegExp(`${s.charAt(i)}`, "g")
    if (s.match(c).length === 1) {
      resultIndex = i
      break
    }
  }
  console.timeEnd("timer")
  console.log(resultIndex)
  return resultIndex
}

// optimized solution from leetcode

// var firstUniqChar = function (s) {
//   for (let i = 0; i < s.length; i++) {
//     if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
//       return i
//     }
//   }
//   return -1
// }

firstUniqChar("loveleetcode")
// firstUniqChar("leetcode")
