/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  // if there is only 1 person and it could be a judge or person so return it
  if (trust.length === 0 && N === 1) {
    return 1
  }
  // if there are only 2 persons then other one is judge
  if (trust.length === 1) {
    return trust[0][1]
  }
  const possibleJudges = {}

  // as per defination person a trusts b , so b could be judge..
  trust.forEach((item) => {
    if (possibleJudges[item[1]]) {
      possibleJudges[item[1]] += 1
    } else {
      possibleJudges[item[1]] = 1
    }
  })

  // remove the possible judge if it exists as a person
  trust.forEach((item) => {
    if (possibleJudges[item[0]]) {
      delete possibleJudges[item[0]]
    }
  })

  const r = Object.entries(possibleJudges)
  if (r.length === 0 || r.length > 1) {
    return -1
  }

  return r[0][1] > 1 ? r[0][0] : -1
}

// findJudge(1, [])
// findJudge(3, [
//   [1, 3],
//   [2, 3],
//   [3, 1],
// ])
