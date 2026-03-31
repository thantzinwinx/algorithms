const str = "3[a2[c]]";

const decodeString = (str) => {
  const stack = [];
  let curr_string = "";
  let curr_number = 0;

  for (const char of str) {
    if (char === "[") {
      stack.push(curr_string);
      stack.push(curr_number);

      curr_string = "";
      curr_number = 0;
    } else if (char === "]") {
      let num = stack.pop();
      let prev_str = stack.pop();
      curr_string = prev_str + curr_string.repeat(num);
    } else if (/\d/.test(char)) {
      curr_number = curr_number * 10 + parseInt(char);
    } else {
      curr_string += char;
    }
  }
  return curr_string;
};

console.log("Decoded String", decodeString(str));
