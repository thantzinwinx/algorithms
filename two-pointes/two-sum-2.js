function pairOfSum(nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const current_sum = nums[left] + nums[right];
    if (current_sum === target) {
      return true;
    }
    if (current_sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

const nums = [1, 3, 4, 6, 8, 10, 13];
const target = 13;
console.log("Two Sum pair", pairOfSum(nums, target));
