// ============Implement array rotation without using extra space===========

function rotationArray(arr, k) {
  let n = arr.length;
  k %= n;
  reverse(arr, 0, n - 1); // reverse whole array
  reverse(arr, k, n - 1); // reset the reverse
  reverse(arr, 0, k - 1); // reverse the value from given condition
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

let arr = [1, 2, 4, 5, 3, 7];
let k = 3;
rotationArray(arr, k);
console.log(arr);

// ======== find the majority element which appears more than n/2 times.==========

function majorityElement(nums) {
  let count = 0;
  let element = 0;
  for (const num of nums) {
    if (count === 0) element = num;

    if (num === element) {
      count = count + 1;
    } else {
      count = count - 1;
    }
  }
  return element;
}

let arr1 = [1, 2, 3, 2, 4, 5, 2, 2, 2, 2];
let result = majorityElement(arr1);
console.log(result);

// ======== Merge two sorted arrays in place ==============

function marge(arr2, arr3) {
  let i = 0,
    j = 0;
  let result = [];
  while (i < arr2.length && j < arr3.length) {
    if (arr2[i] <= arr3[j]) {
      result.push(arr2[i]);
      i++;
    } else {
      result.push(arr3[j]);
      j++;
    }
  }

  while (i < arr2.length) {
    result.push(arr2[i]);
    i++;
  }

  while (j < arr3.length) {
    result.push(arr3[j]);
    j++;
  }
  return result;
}

let arr2 = [1, 2, 3, 4, 5, 6];
let arr3 = [1, 3, 4, 5, 7, 8];

let value = marge(arr2, arr3);
console.log(value);

//==========Find the first non repeting element ===========

function firstNonRepeating(arr) {
  const freq = {};
  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
  }

  for (let item of arr) {
    if (freq[item] === 1) {
      return item;
    }
  }

  return null;
}

console.log(firstNonRepeating([4, 5, 1, 2, 0, 4]));

// ==========Rearrange array in alternating positive/negative================

function rearrange(arr) {
  let pos = [];
  let nev = [];
  for (const item of arr) {
    if (item >= 0) {
      pos.push(item);
    } else {
      nev.push(item);
    }
  }

  let i = 0,
    j = 0,
    k = 0;
  const result = [];
  while (i < pos.length && j < nev.length) {
    result[k++] = pos[i++];
    result[k++] = nev[j++];
  }

  while (i < pos.length) result[k++] = pos[i++];
  while (j < nev.length) result[k++] = nev[j++];

  return result;
}

console.log(rearrange([1, -2, 3, -4, -1, 4]));
