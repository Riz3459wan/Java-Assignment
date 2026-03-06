// 1. Function that takes another function (Callback)

function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Rizwan", sayBye);

// 2. Function that returns another function (Closure)

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

let double = multiplier(2);
console.log("Closure Example:", double(5));
console.log();

// 3. Custom myMap

function myMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result[result.length] = callback(arr[i], i, arr);
  }

  return result;
}

// 4. Custom myFilter

function myFilter(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result[result.length] = arr[i];
    }
  }

  return result;
}

// 5. Custom myReduce

function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

let numbers = [1, 2, 3, 4, 5];

console.log("Original Array:", numbers);

// Test myMap
let squared = myMap(numbers, function (num) {
  return num * num;
});
console.log("myMap (Square):", squared);

// Test myFilter
let evenNumbers = myFilter(numbers, function (num) {
  return num % 2 === 0;
});
console.log("myFilter (Even):", evenNumbers);

// Test myReduce
let sum = myReduce(
  numbers,
  function (acc, num) {
    return acc + num;
  },
  0,
);
console.log("myReduce (Sum):", sum);
