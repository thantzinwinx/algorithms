function threeSumWithLogs(nums) {
    console.log("INPUT:", nums);
  
    // 1) Sort the array
    nums.sort((a, b) => a - b);
    console.log("SORTED:", nums);
  
    const result = [];
  
    // 2) Loop i as the first number of triplet
    for (let i = 0; i < nums.length - 2; i++) {
      console.log("\n--------------------------------------");
      console.log(`i = ${i}, nums[i] = ${nums[i]} (this is 'a')`);
  
      // Skip duplicate 'a'
      if (i > 0 && nums[i] === nums[i - 1]) {
        console.log(`SKIP i=${i} because nums[i] == nums[i-1] (${nums[i]})`);
        continue;
      }
  
      // 3) Two pointers to find b + c = -a
      let left = i + 1;
      let right = nums.length - 1;
  
      console.log(`Start pointers: left=${left} (nums[left]=${nums[left]}), right=${right} (nums[right]=${nums[right]})`);
  
      while (left < right) {
        const a = nums[i];
        const b = nums[left];
        const c = nums[right];
        const sum = a + b + c;
  
        console.log(
          `Check: a=${a} (i=${i}), b=${b} (left=${left}), c=${c} (right=${right}) => sum=${sum}`
        );
  
        if (sum === 0) {
          console.log("✅ Found triplet:", [a, b, c]);
          result.push([a, b, c]);
  
          // Move both pointers inward after finding a valid triplet
          left++;
          right--;
          console.log(`Move both pointers -> left=${left}, right=${right}`);
  
          // Skip duplicates for b
          while (left < right && nums[left] === nums[left - 1]) {
            console.log(`Skip duplicate b at left=${left} (nums[left]=${nums[left]})`);
            left++;
          }
  
          // Skip duplicates for c
          while (left < right && nums[right] === nums[right + 1]) {
            console.log(`Skip duplicate c at right=${right} (nums[right]=${nums[right]})`);
            right--;
          }
  
        } else if (sum < 0) {
          console.log("sum < 0, need bigger number -> move left++");
          left++;
          console.log(`left is now ${left}`);
  
        } else {
          console.log("sum > 0, need smaller number -> move right--");
          right--;
          console.log(`right is now ${right}`);
        }
      }
    }
  
    console.log("\nRESULT:", result);
    return result;
  }
  
  // Example run
  threeSumWithLogs([-1, 0, 1, 2, -1, -4]);