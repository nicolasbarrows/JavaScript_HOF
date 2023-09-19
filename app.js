console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let plus = function (number) {
  return function (plusNumber) {
    return plusNumber + number;
  };
};

let plus15 = plus(15);
console.log(plus15(10));
