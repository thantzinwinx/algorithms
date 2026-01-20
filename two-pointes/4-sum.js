function fourSumpair(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const total = nums[i] + nums[j] + nums[left] + nums[right];

        if (total < 0) {
          left++;
        } else if (total > 0) {
          right--;
        } else {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          left++;
          right--;
        }
      }
    }
  }
  return result;
}

//[-2,-1,0,0,1,2]
const nums = [1, 0, -1, 0, -2, 2],
  target = 0;
// Expected: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log("Four sum", fourSumpair(nums, target));
