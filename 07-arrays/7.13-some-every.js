/**
 * ============================================================
 * 📘 some() & every()
 * ============================================================
 */

const numbers = [10, 20, 30];

/**
 * ============================================================
 * 🧩 some()
 * ============================================================
 *
 * যেকোনো একটি match হলেই true
 */

const hasBigNumber = numbers.some((num) => {
  return num >= 25;
});

if (hasBigNumber) {
  console.log("Congratulations! You have also the big number");
} else {
  console.log("Sorry! You can't have any big number");
}

/**
 * ============================================================
 * 🧩 every()
 * ============================================================
 *
 * সবগুলো match হতে হবে
 */

const allPositive = numbers.every((number) => {
  return number > 10;
});

if (allPositive) {
  console.log("All numbers are greater than 10");
} else {
  console.log("All numbers aren't greater than 10");
}

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * some:
 * → at least one
 *
 * every:
 * → all
 *
 * ============================================================
 */
