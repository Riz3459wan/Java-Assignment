let str = "*";
let spc = " ";
let num = 5;

// Pattern 1 (Right Triangle):
for (let i = 1; i <= num; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += str + " ";
  }

  console.log(row);
}

// Pattern 2 (Inverted Triangle):
for (let i = 1; i <= num; i++) {
  let row = "";

  for (let j = 0; j <= num - i; j++) {
    row += str + " ";
  }

  console.log(row);
}

// Pattern 3 (Pyramid):
for (let i = 1; i <= num; i++) {
  let row = "";

  for (let j = 1; j <= num - i; j++) {
    row += spc;
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    row += str;
  }

  console.log(row);
}

// Pattern 4 (Diamond):

for (let i = 1; i <= num; i++) {
  let row = "";

  for (let j = 1; j <= num - i; j++) {
    row += spc;
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    row += str;
  }

  console.log(row);
}

for (let i = num - 1; i >= 1; i--) {
  let row = "";

  for (let j = 1; j <= num - i; j++) {
    row += spc;
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    row += str;
  }

  console.log(row);
}
