const nums = [2, 1, 3, 2, 4, 3];

const nextGeneratorElement = (nums) => {
  const stack = [];
  const result = new Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = nums[i];
    }
    stack.push(i);
  }
  return result;
};

console.log("Next Generator Element", nextGeneratorElement(nums));
