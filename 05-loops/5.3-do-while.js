/**
 * ============================================================
 * 📘 Do While Loop
 * ============================================================
 *
 * কমপক্ষে ১ বার execute হবেই
 */

/**
 * ============================================================
 * 🧩 Example
 * ============================================================
 */

let number = 1;

do {
  console.log("Current Number:", number);

  number++;
} while (number <= 5);

/**
 * ============================================================
 * 🧩 Important Difference
 * ============================================================
 *
 * while:
 * → আগে condition check করে
 *
 * do while:
 * → আগে code execute করে
 */

/**
 * Real world example
 */

let correctPin = 1234;
let enteredPin;

do {
  enteredPin = Number(prompt("Enter Your ATM PIN:"));

  if (enteredPin !== correctPin) {
    console.log("Wrong PIN! Try Again.");
  }
} while (enteredPin !== correctPin);

console.log("Access Granted!");

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * do while:
 * → at least one execution guarantee করে
 *
 * ============================================================
 */
