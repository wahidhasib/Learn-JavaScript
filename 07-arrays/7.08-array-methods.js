/**
 * ============================================================
 * 📘 Common Array Methods
 * ============================================================
 */

const language = ["PHP", "JavaScript", "Python"];

/**
 * ============================================================
 * 🧩 includes()
 * ============================================================
 * Check value exist or not and return bool value
 * this is also case sensitive
 */

//return false
// const findWord = "PHp";

const findWord = "PHP"; //return true

if (language.includes(findWord)) {
  console.log(`${findWord} word found in languages array`);
} else {
  console.log("Not found!");
}

/**
 * ============================================================
 * 🧩 indexOf()
 * ============================================================
 */

console.log(language.indexOf("PYthon")); // return -1
console.log(language.indexOf("Python"));

/**
 * ============================================================
 * 🧩 join()
 * ============================================================
 * Converts array item as a string value
 */

console.log(language.join(" - "));

/**
 * ============================================================
 * 🧩 concat()
 * ============================================================
 */

const frontend = ["HTML", "CSS"];

const all = frontend.concat(language);
const sameOutput = [...frontend, ...language];

console.log(all);
console.log(sameOutput);

/**
 * * Explanation
 * Array concat use for join array with another array
 * in the other hand, spread operator use for better flexibility
 */

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * Array methods:
 * → data manipulation সহজ করে
 *
 * ============================================================
 */
