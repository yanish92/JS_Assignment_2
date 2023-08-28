let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

function calculateArraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let sum_1 = calculateArraySum(arr_1);
let sum_2 = calculateArraySum(arr_2);

let totalSum = sum_1 + sum_2;

console.log("Sum of arr_1: " + sum_1);
console.log("Sum of arr_2: " + sum_2);
console.log("Total sum: " + totalSum);
