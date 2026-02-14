function isPalindrom(head) {
  if (!head || !head.next) return true;

  let reversedHead = null;
  let curr = head;
  while (curr) {
    reversedHead = { val: curr.val, next: reversedHead };
    curr = curr.next;
  }

  let left = head;
  let right = reversedHead;
  while (left && right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
}

const head = [1, 2, 2, 1];
console.log("palindrom", isPalindrom(head));
