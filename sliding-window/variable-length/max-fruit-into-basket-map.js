let fruits = [3, 1, 1, 2, 3, 2, 1, 2, 0]; //output 4

function fruitIntoBasket(fruits) {
  let start = 0;
  let count = new Map();
  let maxFruit = 0;

  for (let end = 0; end < fruits.length; end++) {
    let f = fruits[end];

    count.set(f, (count.get(f) || 0) + 1);

    while (count.size > 2) {
      let left = fruits[start];
      count.set(left, count.get(left) - 1);
      if (count.get(left) === 0) count.delete(left);

      start++;
    }
    maxFruit = Math.max(maxFruit, end - start + 1);
  }
  return maxFruit;
}

console.log("max Fruits", fruitIntoBasket(fruits));
