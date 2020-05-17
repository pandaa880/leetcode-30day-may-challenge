/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const r = []
  // store the frequency of each character in p
  const map = {}
  // keep two pointers for window
  let windowStart = 0
  let windowEnd = 0

  // get the frequency of each char
  for (let l of p) {
    if (map[l]) {
      map[l]++
    } else {
      map[l] = 1
    }
  }

  // loop through s using window
  while (windowEnd < s.length) {
    // if the char is found in map then decrease frequency and increase window
    if (map[s.charAt(windowEnd)] > 0) {
      map[s.charAt(windowEnd)]--
      windowEnd++

      // if the window size is same as p then store start index
      if (windowEnd - windowStart === p.length) {
        // console.log("found one")
        r.push(windowStart)
      }
      // if both window pointers are at same index then increment them
    } else if (windowStart === windowEnd) {
      windowStart++
      windowEnd++

      // decrease window
    } else {
      map[s.charAt(windowStart)] += 1
      windowStart++
    }
  }

  // console.log(r)
  return r
}

findAnagrams("cbaebabacd", "abc")
findAnagrams("abba", "ab")
findAnagrams("baa", "aa")
