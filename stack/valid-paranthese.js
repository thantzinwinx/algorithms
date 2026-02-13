const string = "(){({})}";

function isValid(s) {
  const stack = [];
  const mapping = { ")": "(", "}": "{", "]": "[" };

  for (const char of s) {
    if (char in mapping) {
      if (stack.length === 0 || stack[stack.length - 1 !== mapping[char]]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

console.log("is Valid paranthese", isValid(string));
