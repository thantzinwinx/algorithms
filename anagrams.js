function anagram(str1,str2){
    if(str1.length !== str2.length) return false;
    const str1Arr = str1.split("");
    const str2Arr = str2.split("");
    const finalArr = [];
    for (let i = 0; i < str1Arr.length; i++){

        for (let j = 0; j < str2Arr.length; j++){
            if(str2Arr[j] === str1Arr[i]){
                finalArr.push(true);
            }
        }
    }
    return finalArr.every((v,i)=> v === true)
};

function newAnagram(str1,str2){
    if(str1.length !== str2.length) return false;
    const str1CharCount = {};
    const str1Arr = str1.trim().toLowerCase().split("");
    str1Arr.forEach((char)=> {
        str1CharCount[char] = ++str1CharCount[char] || 1;
    })
    

}

const constructCharMap = (str) => {
    const charMap= {};
    str = str.toLowerCase().replace(/[\W]/g,'')
    for (let char of str){
        charMap[char] = ++charMap[char] || 1;
    }
    return charMap;
}



function preferAnagram(str1,str2){
    const charMapA = constructCharMap(str1);
    const charMapB = constructCharMap(str2);
    
    if(Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;

    for (let char in charMapA){
        if(charMapA[char] !== charMapB[char]) return false
    }
    return true;
}

function cleanStr(str) {
    return str.trim().toLowerCase().replace(/[\W]/g,'').split("").sort().join("")
}

function bestAnagram(str1,str2){
    return cleanStr(str1) === cleanStr(str2)
}



console.log("Anagram",bestAnagram("coding money","money coding"))


// console.log("Anagram",anagram("coding money","money coding"))
// console.log("Anagram",newAnagram("rail safety","fairy tales"))
