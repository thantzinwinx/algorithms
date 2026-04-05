let apples = [25, 9, 23, 8, 3],
  h = 5;

const minHarvestRate = (apples, h) => {
  function timeTaken(rate) {
    let time = 0;
    for (let i = 0; i < apples.length; i++) {
      time += Math.ceil(apples[i] / rate);
    }
    return time;
  }
  let left = 1;
  let right = Math.max(...apples);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (timeTaken(mid) > h) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

console.log("Min Harvest Rate", minHarvestRate(apples, h));
