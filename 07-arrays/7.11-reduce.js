/**
 * ============================================================
 * 📘 reduce()
 * ============================================================
 *
 * সব value combine করে
 * single value return করে
 */

const numbers = [10, 20, 30];

/**
 * ============================================================
 * 🧩 Example
 * ============================================================
 */

const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100);

// 100 is the initial value

console.log(total);

/**
 * ============================================================
 * 🧩 Real life problem solving
 * ============================================================
 */

const fruits = ["apple", "banana", "apple", "guava", "apple"];

const count = fruits.reduce((accumulator, fruit) => {
  accumulator[fruit] = (accumulator[fruit] || 0) + 1;
  return accumulator;
}, {});

console.log(count);

/**
 * ============================================================
 * 🧠 EASY UNDERSTANDING
 * ============================================================
 *
 * accumulator:
 * → previous result
 *
 * currentValue:
 * → current item
 */

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * reduce:
 * → single output তৈরি করে
 *
 * ============================================================
 */
