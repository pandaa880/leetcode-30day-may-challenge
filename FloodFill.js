/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor, prevColor = image[sr][sc]) {
  // take previous color as default argument

  // if the row and column indexes goes out of range then don't do anything
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) {
    return image
  }

  // if color of the current pixel is not same as previous then don't change it
  if (image[sr][sc] !== prevColor) {
    return image
  }

  // if the pixel has already desired color then don't change it
  if (image[sr][sc] === newColor) {
    return image
  }

  // change the color of pixel
  image[sr][sc] = newColor

  // go down by 1 pixel
  floodFill(image, sr + 1, sc, newColor, prevColor)
  // go up by 1 pixel
  floodFill(image, sr - 1, sc, newColor, prevColor)
  // go right by 1 pixel
  floodFill(image, sr, sc + 1, newColor, prevColor)
  // go left by 1 pixel
  floodFill(image, sr, sc - 1, newColor, prevColor)

  // after fill return the image
  return image
}

function floodFillUtil(image, sr, sc, prevColor, newColor) {}

// const arr = [
//   [1, 1, 1],
//   [1, 1, 0],
//   [1, 0, 1],
// ]
const arr = [
  [0, 0, 0],
  [0, 1, 0],
]
floodFill(arr, 1, 1, 1)

console.log(arr)
