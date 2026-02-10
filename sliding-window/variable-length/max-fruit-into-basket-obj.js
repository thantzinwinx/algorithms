let fruits = [3, 1, 1, 2, 3, 2, 1, 2, 0]; //output 4

function fruitIntoBasket(fruits) {
  let start = 0;
  let basket = {};
  let maxFruit = 0;

  for (let end = 0; end < fruits.length; end++) {
    basket[fruits[end]] = (basket[fruits[end]] || 0) + 1;

    while (Object.keys(basket).length > 2) {
      basket[fruits[start]]--;

      if (basket[fruits[start]] === 0) {
        delete basket[fruits[start]];
      }
      start++;
    }
    maxFruit = Math.max(maxFruit, end - start + 1);
  }
  return maxFruit;
}

console.log("max Fruits", fruitIntoBasket(fruits));
