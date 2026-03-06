// 1:-Generates a 10x10 multiplication table
let size = 10;

for (let i = 1; i <= size; i++) {
  let row = "";

  for (let j = 1; j <= size; j++) {
    let value = i * j;

    let isPerfectSquare = false;

    for (let k = 1; k * k <= value; k++) {
      if (k * k === value) {
        isPerfectSquare = true;
        break;
      }
    }

    let display = isPerfectSquare ? value + "*" : value + "";

    let length = 0;
    for (let x = 0; display[x] !== undefined; x++) {
      length++;
    }

    let spacesNeeded = 6 - length;
    for (let s = 1; s <= spacesNeeded; s++) {
      row += " ";
    }

    row += display;
  }

  console.log(row);
}
