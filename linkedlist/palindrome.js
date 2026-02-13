const head = [1, 2, 2, 1];

function isPalindrom(head) {
  if (!head || !head.next) return true;
  console.log("head", head);

  // 1. find middle
  let slow = head;
  console.log("slow", slow);
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    console.log("second slow", slow);
    fast = fast.next.next;
    console.log("second fast", fast);
  }

  // 2. reverse second half starting at slow
  let prev = null;
  let curr = slow;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  // now prev is head of reversed second half

  // 3. compare first half and reversed second half
  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }

  return true;
}

console.log("palindrom", isPalindrom(head));
