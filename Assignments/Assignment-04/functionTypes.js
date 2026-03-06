// Function declaration
function tringle() {
  let b = 5;
  let h = 7;
  console.log("Area of Tringle is: " + (1 / 2) * b * h);
}
tringle();

// Function expression
let square = function () {
  let s = 5;
  console.log("Area of Square is: " + s * s);
};
square();

// Arrow function
let rectangle = () => {
  let b = 5;
  let h = 7;
  console.log("Area of Ractangle: " + b * h);
};

rectangle();

// Immediately Invoked Function Expression (IIFE)
(() => {
  let pie = Math.PI;
  let r = 5;
  console.log("Area of Circle: " + pie * r * r);
})();
