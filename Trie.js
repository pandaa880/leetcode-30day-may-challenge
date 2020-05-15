/**
 * Trie Node
 */
let Node = function () {
  this.keys = new Map()
  this.end = false

  this.setEnd = function () {
    this.end = true
  }

  this.isEnd = function () {
    return this.end
  }
}

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  // initialize root node
  this.root = new Node()
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word, node) {
  if (node === undefined) {
    node = this.root
  }

  if (word.length === 0) {
    node.setEnd()
    return
  } else if (!node.keys.has(word[0])) {
    node.keys.set(word[0], new Node())
    return this.insert(word.substring(1), node.keys.get(word[0]))
  } else {
    return this.insert(word.substring(1), node.keys.get(word[0]))
  }
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root

  while (word.length > 1) {
    if (!node.keys.get(word[0])) {
      return false
    } else {
      node = node.keys.get(word[0])
      word = word.substring(1)
    }
  }

  return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root

  while (prefix.length > 1) {
    if (!node.keys.get(prefix[0])) {
      return false
    } else {
      node = node.keys.get(prefix[0])
      prefix = prefix.substring(1)
    }
  }

  return node.keys.has(prefix) ? true : false
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
var obj = new Trie()
obj.insert("prashant")
obj.insert("piyush")
obj.insert("say")
// obj.insert("ash")
// obj.insert("not")
console.log(obj.search("say"))
console.log(obj.search("ash"))
console.log(obj.startsWith("pq"))
// var param_2 = obj.search(word)
// var param_3 = obj.startsWith(prefix)
