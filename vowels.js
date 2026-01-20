const VOWELS = ['a','e','i','o','u']
function vowels(str){
    const vowelsArr = []
    str = str.toLowerCase().trim().replace(/[\W]/g,'').split("")
    str.forEach(char => {
        if(VOWELS.includes(char)){
            vowelsArr.push(char)
        }
    })
    return vowelsArr.length;
};


function bestVowel (str) {
    const matches = str.match(/[aeiou]/gi);
    console.log("matches",matches)
    return matches ? matches.length : 0
}

console.log("vowels",vowels("Coding Money"))
console.log("vowels",bestVowel("HiO There!"))
