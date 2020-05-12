/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  // take initial start and end positions
  let start = 0
  let end = nums.length - 1

  // let tempMid = Number.parseInt(start + (end - start) / 2)

  // if (
  //   nums[tempMid] !== nums[tempMid + 1] &&
  //   nums[tempMid] !== nums[tempMid - 1]
  // ) {
  //   return nums[tempMid]
  // }

  // keep looping until start is equal to end
  while (start < end) {
    // find the middle index
    const mid = Number.parseInt(start + (end - start) / 2)

    // if there was no single element then first occurence of each unique element will be at 2*i (i is index)
    /**
     * with single element
     * all elements which are before the single element have first occurence at even index and next at odd
     * all elements which are after the single element have first occurence at odd index and next at even
     */

    // so check if middle is even or odd
    if (mid % 2 === 0) {
      // if it is even then check if it is a first occurent or not
      if (nums[mid] === nums[mid + 1]) {
        // if first occurence then our single element is after the mid
        // so move the start index
        start = mid + 1
      } else {
        // of it is before the mid
        // so move the end index
        end = mid
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        // if first occurence then our single element is after the mid
        // so move the start index
        start = mid + 1
      } else {
        // of it is before the mid
        // so move the end index
        end = mid
      }
    }
  }
  // console.log(nums[start], nums[end])
  // at the end our start and end will be equal so return it
  return nums[start]
}

singleNonDuplicate([1, 1, 2, 3, 3])
singleNonDuplicate([1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8])
singleNonDuplicate([1, 1, 3, 3, 4, 4, 5, 5, 7, 7, 8])
singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])
