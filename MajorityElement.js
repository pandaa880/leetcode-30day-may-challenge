/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const majorityCount = Math.floor(nums.length / 2)
  const digitCounts = {}

  nums.forEach((item) => {
    if (digitCounts[item]) {
      digitCounts[item] += 1
    } else {
      digitCounts[item] = 1
    }
  })

  const result = Object.entries(digitCounts).find((item) => {
    return item[1] > majorityCount
  })

  return +result[0]
}

majorityElement([3, 2, 3])
