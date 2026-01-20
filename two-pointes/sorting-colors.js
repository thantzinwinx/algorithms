function sortingColors(nums) {
  let low = 0; // Boundary for 0s
  let mid = 0; // The "Scout" (replaces i)
  let high = nums.length - 1; // Boundary for 2s

  while (mid <= high) {
    // The scout works until it hits the high boundary
    if (nums[mid] === 0) {
      // Swap mid with low (push 0 to the front)
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // 1 is already in the middle, just move the scout
      mid++;
    } else if (nums[mid] === 2) {
      // Swap mid with high (push 2 to the back)
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
      // Note: We don't move mid++ here because the new number
      // from the back needs to be checked!
    }
  }
  return nums;
}

const nums = [2, 1, 2, 0, 1, 0, 1, 0, 1];
console.log("Sorting colors", sortingColors(nums));
