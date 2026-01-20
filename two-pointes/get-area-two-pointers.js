function getMaxArea(heights) {
  let left = 0,
    right = heights.length - 1;
  let max_area = 0;
  while (left < right) {
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const area = width * height;

    if (area > max_area) max_area = area;

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max_area;
}
// const heights = [3, 4, 1, 2, 2, 4, 1, 3, 2];
const heights = [1, 2, 1];

console.log("area", getMaxArea(heights)); //21
