function moveZeros(nums) {
  let lastNonZeroAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[lastNonZeroAt], nums[i]] = [nums[i], nums[lastNonZeroAt]];
      lastNonZeroAt++;
    }
  }
  return nums;
}

const nums = [2, 0, 4, 0, 9]; //output [2,4,9,0,0]
console.log("move zeros", moveZeros(nums));
