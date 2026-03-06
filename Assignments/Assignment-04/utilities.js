// capitalize(str) - capitalize first letter of each word
// first Way
function capitalize(str) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (capitalizeNext) {
      let index = -1;

      for (let j = 0; j < lower.length; j++) {
        if (ch === lower[j]) {
          index = j;
          break;
        }
      }

      if (upper !== -1) {
        result += upper[index];
      } else {
        result += ch;
      }
      capitalizeNext = false;
    } else {
      result += ch;
    }
    if (ch === " ") {
      capitalizeNext = true;
    }
  }
  return result;
}
console.log(capitalize("hello world from javascript"));

// 2nd Way
function capitalizeEveryWord(str) {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (capitalizeNext && ch !== " ") {
      result += ch.toUpperCase();
      capitalizeNext = false;
    } else {
      result += ch;
    }

    if (ch === " ") {
      capitalizeNext = true;
    }
  }

  return result;
}

console.log(capitalizeEveryWord("hello world from javascript"));

// truncate(str, maxLength) - truncate string with ellipsis

function truncate(str, maxLength) {
  let result = "";
  if (str.length <= maxLength) {
    return str;
  }
  for (let i = 0; i < maxLength; i++) {
    result += str[i];
  }
  return result + "...";
}
console.log(truncate("Hello world from JavaScript", 50));

// debounce(func, delay) - debounce implementation

function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function searchData(value) {
  console.log("Searching for:", value);
}

const debouncedSearch = debounce(searchData, 1000);

debouncedSearch("H");
debouncedSearch("He");
debouncedSearch("Hel");
debouncedSearch("Hell");
debouncedSearch("Hello");

// throttle(func, limit) - throttle implementation
function throttle(func, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

function logMessage(msg) {
  console.log("Executed:", msg, "Time:", Date.now());
}

const throttledLog = throttle(logMessage, 2000);

setInterval(() => {
  throttledLog("Hello");
}, 500);

// deepClone(obj) - deep clone an object

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Array
  if (Array.isArray(obj)) {
    let arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i]);
    }
    return arrCopy;
  }

  // Handle Object
  let objCopy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepClone(obj[key]);
    }
  }

  return objCopy;
}

// flattenArray(arr) - flatten nested arrays
// 1st way
function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let temp = flattenArray(arr[i]);
      result = result.concat(temp);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

const arr = [1, [2, 3], [4, [5, 6]]];
console.log(flattenArray(arr));

// 2nd way
function flattenArray(arr) {
  return arr.reduce(
    (acc, value) =>
      Array.isArray(value)
        ? acc.concat(flattenArray(value))
        : acc.concat(value),
    [],
  );
}

// Depth level flattenArray

function flattenArray(arr, level) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && level > 0) {
      let temp = flattenArray(arr[i], level - 1);
      result = result.concat(temp);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

// groupBy(arr, key) - group array of objects by key
// 1st way
function groupBy(arr, key) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    let groupKey = arr[i][key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(arr[i]);
  }

  return result;
}

// 2nd way

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    let groupKey = item[key];

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(item);

    return acc;
  }, {});
}
