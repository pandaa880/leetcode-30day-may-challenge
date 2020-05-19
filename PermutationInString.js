/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // if (s2.length < s1.length) {
  //   console.log("False")
  //   return false
  // }

  // const map1 = {}
  // const map2 = {}
  // let count = 0
  // let min
  // let max

  // for (let i = 0; i < s1.length; i++) {
  //   if (map1[s1.charAt(i)]) {
  //     map1[s1.charAt(i)] += 1
  //   } else {
  //     map1[s1.charAt(i)] = 1
  //   }
  // }

  // for (let i = 0; i < s2.length; i++) {
  //   const char = s2.charAt(i)

  //   if (map1[char]) {
  //     count++
  //     if (min === undefined && max === undefined) {
  //       min = i
  //       max = i
  //     } else {
  //       if (i < min) {
  //         min = i
  //       }
  //       if (i > max) {
  //         max = i
  //       }
  //     }
  //   }
  // }

  // console.log(count, min, max)

  // if (min === undefined && max === undefined) {
  //   console.log("false")
  //   return false
  // }

  // if (count >= s1.length) {
  //   if (max - min + 1 === count) {
  //     console.log("true")
  //     return true
  //   } else {
  //     return false
  //   }
  // } else {
  //   return false
  // }
  const r = []
  // store the frequency of each character in p
  const map = {}
  // keep two pointers for window
  let windowStart = 0
  let windowEnd = 0

  // get the frequency of each char
  for (let l of s1) {
    if (map[l]) {
      map[l]++
    } else {
      map[l] = 1
    }
  }

  // loop through s using window
  while (windowEnd < s2.length) {
    // if the char is found in map then decrease frequency and increase window
    if (map[s2.charAt(windowEnd)] > 0) {
      map[s2.charAt(windowEnd)]--
      windowEnd++

      // if the window size is same as p then store start index
      if (windowEnd - windowStart === s1.length) {
        console.log("found one")
        r.push(windowStart)
      }
      // if both window pointers are at same index then increment them
    } else if (windowStart === windowEnd) {
      windowStart++
      windowEnd++

      // decrease window
    } else {
      map[s2.charAt(windowStart)] += 1
      windowStart++
    }
  }

  console.log(r)
  return r
}

checkInclusion("ab", "eidbaooo")
checkInclusion("ab", "eidboaoo")
checkInclusion("a", "ab")
checkInclusion("adc", "dcda")
// checkInclusion("hello", "ooolleoooleh")
