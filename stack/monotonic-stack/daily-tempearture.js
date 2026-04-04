const temps = [65, 70, 68, 60, 55, 75, 80, 74];

const dailyTemperature = (temps) => {
  let n = temps.length;
  const result = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i);
  }
  return result;
};

console.log("Daily Temperature ", dailyTemperature(temps));
