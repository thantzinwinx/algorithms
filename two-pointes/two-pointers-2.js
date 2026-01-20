const twoPointersPattern = (arr,target)=> {
    let left = 0, right = arr.length -1;

    while(left < right){

        const sum = arr[left] + arr[right];

        if(sum === target){
            console.log("left",arr[left],"right",arr[right]);
            return true;
        }
        if(sum > target) right--;
        if(sum < target) left++;
    }
    return false;
};

const array = [1,3,4,6,8,10,13];
const target = 14;
const result = twoPointersPattern(array,target);
console.log("result",result)