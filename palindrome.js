function palindrome(str) {
 const reverseStr = str.split("").reverse().join("");

 console.log("reverse",reverseStr)
 return  str === reverseStr
};

console.log(palindrome("kayak"))