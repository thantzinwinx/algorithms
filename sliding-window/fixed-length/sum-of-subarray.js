let nums = [2, 1, 5, 1, 3, 2],
  k = 3;

function maxSubarraySum(nums, k) {
  let maxSum = -Infinity;
  let windowSum = 0;
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    windowSum += nums[end];

    if (end - start + 1 === k) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= nums[start];
      start++;
    }
  }
  return maxSum;
}

console.log("Max sum of subarray", maxSubarraySum(nums, k));
