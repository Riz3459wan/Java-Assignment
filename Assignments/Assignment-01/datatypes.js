// datatypes.js
// ======================================================
// This file demonstrates all primitive data types in JavaScript
// and shows examples of type coercion.
// ======================================================

// ======================================================
// 1. STRING
// ======================================================
let myString = "Hello, JavaScript!";
console.log("Value:", myString);
console.log("Type:", typeof myString); // string

// ======================================================
// 2. NUMBER
// ======================================================
let myNumber = 100;
console.log("\nValue:", myNumber);
console.log("Type:", typeof myNumber); // number

// ======================================================
// 3. BOOLEAN
// ======================================================
let myBoolean = true;
console.log("\nValue:", myBoolean);
console.log("Type:", typeof myBoolean); // boolean

// ======================================================
// 4. NULL
// ======================================================
let myNull = null;
console.log("\nValue:", myNull);
console.log("Type:", typeof myNull);
// Important: typeof null returns "object" (this is a known JavaScript bug)

// ======================================================
// 5. UNDEFINED
// ======================================================
let myUndefined;
console.log("\nValue:", myUndefined);
console.log("Type:", typeof myUndefined); // undefined

// ======================================================
// 6. SYMBOL
// ======================================================
let mySymbol = Symbol("unique");
console.log("\nValue:", mySymbol);
console.log("Type:", typeof mySymbol); // symbol

// ======================================================
// 7. BIGINT
// ======================================================
let myBigInt = 1234567890123456789012345678901234567890n;
console.log("\nValue:", myBigInt);
console.log("Type:", typeof myBigInt); // bigint

// ======================================================
// TYPE COERCION EXAMPLES
// ======================================================

// ======================================================
// Example 1: String + Number
// ======================================================
// When adding a string and a number, JavaScript converts
// the number into a string (implicit coercion).

let result1 = "10" + 5;
console.log("\n'10' + 5 =", result1);
console.log("Type:", typeof result1); // string

// ======================================================
// Example 2: String - Number
// ======================================================
// When using subtraction, JavaScript converts the string
// into a number.

let result2 = "10" - 5;
console.log("\n'10' - 5 =", result2);
console.log("Type:", typeof result2); // number

// ======================================================
// Example 3: Boolean + Number
// ======================================================
// true becomes 1 and false becomes 0 during numeric operations.

let result3 = true + 5;
console.log("\ntrue + 5 =", result3);
console.log("Type:", typeof result3); // number

// ======================================================
// Example 4: Equality (== vs ===)
// ======================================================
// == performs type coercion
// === checks both value and type

console.log("\n5 == '5' :", 5 == "5"); // true (coercion happens)
console.log("5 === '5' :", 5 === "5"); // false (strict comparison)
