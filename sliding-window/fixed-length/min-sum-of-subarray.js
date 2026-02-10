let nums = [2, 1, 5, 1, 3, 2],
  k = 3;

function minSubarraySum(nums, k) {
  let minSum = Infinity;
  let windowSum = 0;
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    windowSum += nums[end];

    if (end - start + 1 === k) {
      minSum = Math.min(minSum, windowSum);
      windowSum -= nums[start];
      start++;
    }
  }
  return minSum;
}
console.log("Max sum of subarray", minSubarraySum(nums, k));
