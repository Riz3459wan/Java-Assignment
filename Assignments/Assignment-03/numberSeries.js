// Fibonacci sequence (first 20 numbers)

let a = 0;
let b = 1;
for (let i = 0; i < 20; i++) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
}

// Prime numbers between 1 and 100

let num = 100;

for (let i = 2; i <= num; i++) {
  let flag = true;
  for (let j = 2; j <= i / 2; j++) {
    if (i % j === 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    console.log(i);
  }
}

// Factorial of numbers 1-10

for (let i = 1; i <= 10; i++) {
  let factorial = 1;
  for (let j = 1; j <= i; j++) {
    factorial *= j;
  }
  console.log(i + " factorial is : " + factorial);
}

// Sum of digits for numbers 1-100

let sum = 0;
for (let j = 0; j <= 100; j++) {
  sum += j;
}
console.log("Sum of 1-100 : " + sum);

// Use different loop types (for, while, do-while) for different series

// for
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// do-while
let j = 0;
do {
  console.log("Wellcome to Do-While loop");
} while (j <= 5);
{
  console.log(j);
  j++;
}
