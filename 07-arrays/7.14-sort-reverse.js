/**
 * ============================================================
 * 📘 sort() & reverse()
 * ============================================================
 */

const numbers = [40, 10, 100, 5];
const string = ["Banana", "Apple", "Orange"];

/**
 * ============================================================
 * 🧩 sort()
 * ============================================================
 */

numbers.sort((a, b) => {
  return a - b;
});

console.log(numbers);

const sortedStr = string.sort(); //Sort modify the original array

console.log(string);
console.log(sortedStr);

/**
 * ============================================================
 * 🧩 reverse()
 * ============================================================
 */

numbers.reverse();

console.log(numbers);

const reverseStr = string.reverse();
console.log(reverseStr);
console.log(string);

const messages = ["Old", "Middle", "New"];

const newArray = [...messages].reverse(); // to save a copy

console.log(messages);
console.log(newArray);

/**
 * ============================================================
 * ⚠️ IMPORTANT
 * ============================================================
 *
 * sort() original array modify করে
 */

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * sort:
 * → arrange data
 *
 * reverse:
 * → reverse order
 *
 * ============================================================
 */
