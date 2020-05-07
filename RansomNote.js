/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote === "" || !magazine === "") {
    console.log(true)
    return true
  }
  if (magazine.length >= ransomNote.length) {
    let ransom_chars = {}
    let magazine_chars = {}

    for (let i = 0; i < ransomNote.length; i++) {
      if (ransom_chars[ransomNote.charAt(i)]) {
        ransom_chars[ransomNote.charAt(i)]++
      } else {
        ransom_chars[ransomNote.charAt(i)] = 1
      }
    }

    for (let i = 0; i < magazine.length; i++) {
      if (magazine_chars[magazine.charAt(i)]) {
        magazine_chars[magazine.charAt(i)]++
      } else {
        magazine_chars[magazine.charAt(i)] = 1
      }
    }

    console.log(ransom_chars, magazine_chars)

    let result = false
    const chars = Object.keys(ransom_chars)

    for (let i = 0; i < chars.length; i++) {
      if (ransom_chars[chars[i]] <= magazine_chars[chars[i]]) {
        result = true
      } else {
        result = false
        break
      }
    }

    console.log(result)
    return result
  } else {
    console.log(false)
    return false
  }
}

canConstruct("", "")
canConstruct("", "b")
canConstruct("a", "")
canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi")
// canConstruct("fffbfg", "effjfggbffjdgbjjhhdegh")
// canConstruct("a", "b")
