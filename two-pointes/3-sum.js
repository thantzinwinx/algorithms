// function threeSum(nums) {
//   nums.sort((a, b) => a - b);
//   const result = [];

//   for (let i = 0; i < nums.length - 2; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     let left = i + 1;
//     let right = nums.length - 1;

//     while (left < right) {
//       const total = nums[i] + nums[left] + nums[right];
//       if (total < 0) {
//         left++;
//       } else if (total > 0) {
//         right--;
//       } else {
//         result.push([nums[i], nums[left], nums[right]]);

//         while (left < right && nums[left] === nums[left + 1]) {
//           left++;
//         }
//         while (left < right && nums[right] === nums[right - 1]) {
//           right--;
//         }
//         left++;
//         right--;
//       }
//     }
//   }
//   return result;
// }

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];

      if (total < 0) {
        left++;
      } else if (total > 0) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);

        //skip duplication for left pointer
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        //skip duplication for right pointer
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return result;
}
//[-1,-1,-1,0,1,2]
const nums = [-1, 0, 1, 2, -1, -1]; //[[-1,-1,2],[-1,0,1]]
console.log("three sum", threeSum(nums));
