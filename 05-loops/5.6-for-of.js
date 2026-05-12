/**
 * ============================================================
 * 📘 for...of Loop
 * ============================================================
 *
 * Iterable data loop করার জন্য use হয়
 *
 * Example:
 * → Array
 * → String
 */

/**
 * ============================================================
 * 🧩 Array Example
 * ============================================================
 */

const students = ["Hasib", "Rakib", "Sakib"];

// for (const student of students) {
//   console.log(student);
// }

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

for (let i = 0; i < students.length; i++) {
  if (i === 1) {
    continue;
  }

  console.log(students[i]);
}

/**
 * ============================================================
 * 🧩 String Example
 * ============================================================
 */

const language = "JavaScript";

for (const char of language) {
  console.log(char);
}

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * for...of:
 * → values return করে
 *
 * ============================================================
 */
