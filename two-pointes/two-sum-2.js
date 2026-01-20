function pairOfSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const current_sum = nums[left] + nums[right];
    if (current_sum === target) {
      console.log("[Found]", nums[left], nums[right]);
      return true;
    } else if (current_sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

const nums = [1, 3, 4, 6, 8, 10, 13];
const target = 13;
console.log("Two Sum pair", pairOfSum(nums, target));
