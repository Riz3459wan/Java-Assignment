// 1:- Comparison Operators

console.log("5 == '5'  :", 5 == "5");
console.log("5 === '5' :", 5 === "5");
console.log("5 != '5'  :", 5 != "5");
console.log("5 !== '5' :", 5 !== "5");
console.log("10 > 5    :", 10 > 5);
console.log("10 < 5    :", 10 < 5);
console.log("10 >= 10  :", 10 >= 10);
console.log("5 <= 3    :", 5 <= 3);

// 2:- Logical Operators
console.log("true && false :", true && false);
console.log("true || false :", true || false);
console.log("!true         :", !true);

// 3:- Truthy and Falsy Values

console.log("Falsy Examples:");
console.log(false, 0, "", null, undefined, NaN);

console.log("Truthy Examples:");
console.log("Hello", 1, -10, [], {}, "0");

// 4:- Short Circuit Evaluation

console.log("false && 'Hello' :", false && "Hello");
console.log("true && 'Hello'  :", true && "Hello");
console.log("true || 'World'  :", true || "World");
console.log("false || 'World' :", false || "World");

let username = "";
let displayName = username || "Guest";
console.log("Default with ||  :", displayName);

// 5:- Nullish Coalescing (??)

console.log("null ?? 'Default' :", null ?? "Default");
console.log("0 || 100          :", 0 || 100);
console.log("0 ?? 100          :", 0 ?? 100);

// 6:- Optional Chaining (?.)

let user = {};
console.log("user.address?.city :", user.address?.city);
