/**
 * ============================================================
 * 📘 Reference Data Types
 * ============================================================
 *
 * JavaScript Reference Types:
 * 1. Object
 * 2. Array
 * 3. Function
 */

/**
 * ============================================================
 * 🧩 1. Object
 * ============================================================
 */

const user = {
  name: "Hasib",
  age: 25,
};

console.log(user);

/**
 * ============================================================
 * 🧩 2. Array
 * ============================================================
 */

const students = ["Hasib", "Rakib", "Sakib"];

console.log(students);

/**
 * ============================================================
 * 🧩 3. Function
 * ============================================================
 */

function hello() {
  console.log("Hello JavaScript");
}

hello();

/**
 * ============================================================
 * ⚠️ IMPORTANT NOTE
 * ============================================================
 *
 * Reference type memory address store করে
 *
 * Primitive type actual value store করে
 */

/**
 * ============================================================
 * * Reference data (Copy by Reference)
 * ============================================================
 */

const fruits = ["Mango", "Banana", "Apple"];

copyFruits = fruits;

copyFruits[0] = "Hello";

console.log(copyFruits);

/**
 * This Reference variables are using Reference position from ram to store values
 * that's why we also change the value by position
 */

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * Object, Array, Function
 * → Reference Types
 *
 * ============================================================
 */
