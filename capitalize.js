function capitalize(str){
    if(str.length === 0) return '';
    const strArr = str.split(" ");
    const finalStr = strArr.map((char) => {
        const capitalizeChar = char.charAt(0).toUpperCase();
        const str = capitalizeChar.concat(char.slice(1))
        return str;
    }).join(" ")

    return finalStr

};

function newWay (str){
    const words = str.split(" ");

    return words.map(word=> word[0].toUpperCase() + word.slice(1)).join(" ")
}

console.log(newWay('this is mukhtar from coding money'))
//result This Is Mukhtar From Coding Money
console.log(capitalize('what is titlecase?'))