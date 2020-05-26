/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  console.log(nums)

  const counts = {
    "0": -1,
  }
  let max_length = 0
  let count = 0

  nums.forEach((item, index) => {
    if (item === 0) {
      count -= 1
    } else {
      count += 1
    }

    if (counts[count] !== undefined) {
      max_length = Math.max(max_length, index - counts[count])
    } else {
      counts[count] = index
    }
  })

  // console.log(max_length)
  return max_length
}

findMaxLength([0, 1, 1, 0, 1, 1, 0, 1])
