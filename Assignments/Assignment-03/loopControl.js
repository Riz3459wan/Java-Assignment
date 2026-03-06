// 1. Break Statement

for (let i = 1; i <= 500; i++) {
  if (i % 7 === 0 && i % 11 === 0) {
    console.log("First number divisible by 7 and 11:", i);
    break;
  }
}

// 2. Continue Statement

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// 3. Labeled Statement with Nested Loop
outerLoop: for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i === 3 && j === 3) {
      break outerLoop;
    }
    console.log("i =", i, "j =", j);
  }
}

// 4. FizzBuzz (1–100)

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
