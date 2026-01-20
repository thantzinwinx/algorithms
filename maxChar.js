function maxChar(str){
    const strArr = str.split("");
    const countObj = {};
    let maxChar = ''
    let maxNum = 0;

    strArr.forEach(char=> {
        countObj[char] = ++countObj[char] || 1  
    });

    for (const char in countObj) {
        if(countObj[char] > maxNum) {
            maxChar = char;
            maxNum = countObj[char]
        }
    }
    return maxChar

}

console.log("MaxChar",maxChar("abcccccd"))