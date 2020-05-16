/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
  // find the max sum in non circular array
  const nonCircularSubarrayMaxSum = kadaneMaxSum(A)

  // find total sum of array
  let totalSum = 0

  for (let i = 0; i < A.length; i++) {
    totalSum += A[i]
    // invert sign of all the elements to find minimum sum
    A[i] = -A[i]
  }

  // circular max sum will be totalSum + max sum of inverted array (which is basically min sum)
  const circularSubArrayMaxSum = totalSum + kadaneMaxSum(A)

  if (circularSubArrayMaxSum === 0) {
    // console.log(nonCircularSubarrayMaxSum)
    return nonCircularSubarrayMaxSum
  }

  // final max sum
  return Math.max(circularSubArrayMaxSum, nonCircularSubarrayMaxSum)
}

function kadaneMaxSum(arr) {
  let current_max_sum = arr[0]
  let best_max_sum = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (current_max_sum < 0) {
      current_max_sum = 0
    }
    current_max_sum = Math.max(arr[i], current_max_sum + arr[i])
    best_max_sum = Math.max(best_max_sum, current_max_sum)
  }

  return best_max_sum
}

// maxSubarraySumCircular([1, -2, 3, -2])
maxSubarraySumCircular([-2, -3, -1])
// maxSubarraySumCircular([5, -3, 5])
