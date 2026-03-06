// Factorial calculation

function factorial(num) {
  if (num === 0 || num === 1) return num;
  return num * factorial(num - 1);
}

console.log(factorial(6));

// Fibonacci sequence

function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(6));

// Sum of array elements
function sum(arr) {
  if (arr.length === 0) return 0;

  return arr[0] + sum(arr.slice(1));
}

let arr = [1, 3, 4, 5, 6];

console.log(sum(arr));

// Find maximum in nested array

function findMax(arr, max = -Infinity) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      max = findMax(arr[i], max);
    } else {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  }

  return max;
}

let arra = [2, [7, 4], [1, [9, 3]], 5];
console.log(findMax(arra));
