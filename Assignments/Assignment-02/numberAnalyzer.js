let num = 24;

// 1:- Positive / Negative / Zero
let sign = num < 0 ? "Negative" : num > 0 ? "Positive" : "Zero";

// 2:- Even or Odd
let evenOdd = num % 2 === 0 ? "Even" : "Odd";

// 3:- Prime Check
let isPrime = true;

if (num <= 1) isPrime = false;

for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

let primeResult = isPrime ? "Prime" : "Not Prime";

// 4:- Perfect Square Check
let isPerfectSquare = false;

for (let i = 1; i * i <= num; i++) {
  if (i * i === num) {
    isPerfectSquare = true;
    break;
  }
}

let squareResult = isPerfectSquare ? "Perfect Square" : "Not Perfect Square";

console.log(`
==============================
        Number Analysis
==============================
Number: ${num}

Type: ${sign}
Parity: ${evenOdd}
Prime: ${primeResult}
Perfect Square: ${squareResult}
==============================
`);
