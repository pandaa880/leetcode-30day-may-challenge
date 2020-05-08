/**
 * You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
 */
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  // check for slopes of 2 coordinates if all of them are same then it is a line
  if (coordinates.length <= 2) {
    return true
  }

  const [x1, y1] = coordinates[0]
  const [x2, y2] = coordinates[1]
  // take a initial slope of first 2 coordinates
  const initialSlope = (y2 - y1) / (x2 - x1)

  // check the slope of rest of the coordinates
  for (let i = 1; i < coordinates.length - 1; i++) {
    const [c1, c2] = coordinates[i]
    const [d1, d2] = coordinates[i + 1]

    const slope = (d2 - c2) / (d1 - c1)

    // keep checking if slope is same - until the last element
    if (slope === initialSlope) {
      continue
    } else {
      // when condition fails means given coordinates doesn't fall in line
      return false
    }
  }

  return true
}

checkStraightLine([
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
])
checkStraightLine([
  [-3, -2],
  [-1, -2],
  [2, -2],
  [-2, -2],
  [0, -2],
])
checkStraightLine([
  [1, 1],
  [2, 2],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 7],
])
