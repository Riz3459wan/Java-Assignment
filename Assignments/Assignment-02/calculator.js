// Addition
let addition = num1 + num2;
console.log(`Addition (+)            : ${addition}`);

// Subtraction
let subtraction = num1 - num2;
console.log(`Subtraction (-)         : ${subtraction}`);

// Multiplication
let multiplication = num1 * num2;
console.log(`Multiplication (*)      : ${multiplication}`);

// Division (with zero check)
if (num2 === 0) {
  console.log("Division (/)            : Cannot divide by zero");
} else {
  let division = num1 / num2;
  console.log(`Division (/)            : ${division}`);
}

// Modulus
if (num2 === 0) {
  console.log("Modulus (%)             : Cannot divide by zero");
} else {
  let modulus = num1 % num2;
  console.log(`Modulus (%)             : ${modulus}`);
}

// Exponentiation
let exponent = num1 ** num2;
console.log(`Exponentiation (**)     : ${exponent}`);
