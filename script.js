let numbers = new Set();

let numberGenerator = function (x, y) {
  // Using 0 and 1 for this example.
  z = x + y;              // 1 = 0 + 1
  numbers.add(x);
  numbers.add(y);         // adds 1
  numbers.add(x = z + y); // 2 = 1 + 1
  numbers.add(y = x + z); // 3 = 2 + 1
  numbers.add(z = x + y); // 5 = 2 + 3
  numbers.add(x = y + z); // 8 = 3 + 5
  numbers.add(y = x + z); // 13 = 8 + 5
  numbers.add(z = x + y); // 21 = 8 + 13
  numbers.add(x = y + z); // 34 = 13 + 21
  numbers.add(y = x + z); // 55 = 34 + 21
  numbers.add(z = x + y); // 89 = 34 + 55
  numbers.add(x = y + z); // 144
  numbers.add(y = x + z); // 233
  numbers.add(z = x + y); // 377
  numbers.add(x = y + z); // 610
  numbers.add(y = x + z); // 987
  numbers.add(z = x + y); // 1,597
  numbers.add(x = y + z); // 2,584
  numbers.add(y = x + z); // 4,181
  numbers.add(z = x + y); // 6,765
  numbers.add(y = x + z); // 9,349
};

numberGenerator(0, 1);
console.log(numbers);
