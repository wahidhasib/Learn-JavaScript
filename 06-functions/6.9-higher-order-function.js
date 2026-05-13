/**
 * ============================================================
 * 📘 Higher Order Function
 * ============================================================
 *
 * যে function:
 * → function receive করে
 * অথবা
 * → function return করে
 */

/**
 * ============================================================
 * 🧩 Example
 * ============================================================
 */

function calculator(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

console.log(calculator(10, 20, add));
console.log(calculator(25, 15, sub));

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * Higher order function:
 * → advanced functional programming concept
 *
 * ============================================================
 */
