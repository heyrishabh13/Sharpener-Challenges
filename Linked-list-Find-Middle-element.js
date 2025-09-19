"use strict";

process.stdin.setEncoding("utf-8");
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var findMiddleElement = function (head) {
  let slow = head;
  let fast = head;

  let len = 0;

  let temp = head;
  while (temp) {
    len++;
    temp = temp.next;
  }

  if (len % 2 === 0) {
    const mid = len / 2 + 1;
    let count = 1;

    temp = head;
    while (count < mid) {
      temp = temp.next;
    }
    return temp;
  } else {
    let slow = head;
    let fast = head;

    while (fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
  // return the middle node of the linked list
};
//Dont change anything below. If changed click on reset.
function ListNode(val, next) {
  return {
    val: val,
    next: next == undefined ? null : next,
  };
}
async function readInput() {
  let inputString = "";
  var output = [];
  process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
    const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);
    var linklistvalues = inputArr[0].split("->");
    var head = ListNode(parseInt(linklistvalues[0]));
    var temp = head;
    var count = 2;
    for (var i = 1; i < linklistvalues.length; i++) {
      var new_node = ListNode(parseInt(linklistvalues[i]));
      count = count + 1;
      temp.next = new_node;
      temp = new_node;
    }
    var output = findMiddleElement(head);
    if (output != null) {
      console.log(output.val);
    } else console.log(-1);

    process.exit();
  });
}
readInput();
