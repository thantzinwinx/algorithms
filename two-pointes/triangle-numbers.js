function countTriangleNumbers(nums) {
  let count = 0;
  nums.sort((a, b) => a - b);
  console.log("nums", nums);
  for (let i = nums.length - 1; i >= 2; i--) {
    let left = 0;
    let right = i - 1;
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        count += right - left;
        right--;
      } else {
        left++;
      }
    }
  }
  return count;
}
//4,6,9,11,15,18
const nums = [11, 4, 9, 6, 15, 18];
console.log("Count of triangle", countTriangleNumbers(nums)); //Output 10
