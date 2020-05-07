/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
const isBadVersion = function (version) {
  return version === 1
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (n < 2) {
      return n
    }

    let start = 1
    let end = n

    while (start < end) {
      // calculate the middle
      let mid = Number.parseInt(start + (end - start) / 2)

      // if middle is bad then discard all element after middle and update the end
      if (isBadVersion(mid)) {
        end = mid

        // if middle is not bad then move the start to middle + 1
      } else {
        start = mid + 1
      }
    }

    return start
  }
}

let findBad = solution(isBadVersion)(3)
