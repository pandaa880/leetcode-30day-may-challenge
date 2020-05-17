/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let count = 1

  if (head === null) {
    return null
  }

  // take 2 pointers
  let odd = head
  let even = head.next

  // keep even first for later use
  let evenFirst = head.next

  while (true) {
    if (odd === null || even === null || even.next === null) {
      odd.next = evenFirst
      break
    }

    odd.next = even.next
    odd = even.next

    if (odd.next === null) {
      even.next = null
      odd.next = evenFirst
      break
    }

    even.next = odd.next
    even = odd.next
  }

  return head
}
