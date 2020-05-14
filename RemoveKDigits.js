/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  if (k === 0) {
    return num
  }

  if (num.length <= k) {
    return "0"
  }

  const stack = []
  let removed_count = 0

  for (let c of num) {
    while (stack.length && c < stack[stack.length - 1] && removed_count < k) {
      stack.pop()
      removed_count += 1
    }
    stack.push(c)
  }

  while (removed_count < k) {
    stack.pop()
    removed_count += 1
  }

  while (stack.length && stack[0] === "0") {
    stack.shift()
  }
  console.log(stack.length ? stack.join("") : "0")
  return stack.length ? stack.join("") : "0"
}

removeKdigits("5337", 2)
removeKdigits("1432219", 3)
removeKdigits("10200", 1)
removeKdigits("10", 1)
removeKdigits("1234567890", 9)
