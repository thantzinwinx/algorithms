function oldChunk(array,size){
    const finalArr = []
    const startIndex = 0;
    while(array.length > size){
        const subArr = array.splice(startIndex,size)
        finalArr.push(subArr)
    }
    finalArr.push(array)
    return finalArr
};

function betterChunk(array,size){
    if(!Array.isArray(array) || size <= 0) return[];
    const result = [];

    for(let i = 0; i < array.length ; i += size){
        result.push(array.slice(i,i + size))
    }
    return result;
}


console.log(betterChunk([1,2,3,4,5,6,7,8],3)) //[[1,2],[3,4],[5]]