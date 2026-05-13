/**
 * ============================================================
 * 📘 splice() vs slice()
 * ============================================================
 */

const numbers = [1, 2, 3, 4, 5];

/**
 * ============================================================
 * 🧩 slice()
 * ============================================================
 *
 * Original array change করে না
 */

const sliced = numbers.slice(1, 4);

console.log(sliced);

console.log(numbers);

/**
 * ============================================================
 * 🧩 splice()
 * ============================================================
 *
 * Original array modify করে
 */

numbers.splice(1, 2);

console.log(numbers);

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * slice:
 * → copy
 *
 * splice:
 * → modify
 *
 * ============================================================
 */

const marks = [25, 45, 75, 85];

const copyMarks = marks.slice(0, 2);
console.log(copyMarks);
console.log(marks);

const modMarks = marks.splice(0, 3);
console.log(modMarks);
console.log(marks);
