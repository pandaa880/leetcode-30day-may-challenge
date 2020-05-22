/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const frequencyMap = {}

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i)
    frequencyMap[c] = frequencyMap[c] + 1 || 1
  }

  const sortedMap = Object.keys(frequencyMap).sort(
    (a, b) => frequencyMap[b] - frequencyMap[a]
  )

  let res = ""

  for (let i = 0; i < sortedMap.length; i++) {
    const c = sortedMap[i]
    res += c.repeat(frequencyMap[c])
  }
  console.log(res)
  return res
}

frequencySort("tree")
