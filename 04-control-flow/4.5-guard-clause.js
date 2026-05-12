/**
 * ============================================================
 * 📘 Guard Clause
 * ============================================================
 *
 * Early return ব্যবহার করে nested if কমানো
 */

/**
 * ============================================================
 * 🧩 Example (Bad Way)
 * ============================================================
 */

function checkUser(user) {
  if (user) {
    if (user.isActive) {
      console.log("Active user");
    }
  }
}

/**
 * ============================================================
 * 🧩 Example (Good Way - Guard Clause)
 * ============================================================
 */

function checkUserBetter(user) {
  if (!user) return;
  if (!user.isActive) return;

  console.log(`Hello ${user?.name}, Congratulations!`);
}

let userInfo = {
  isActive: true,
  name: "Hasib",
};

checkUserBetter(userInfo);

/**
 * ============================================================
 * 🎯 BENEFIT
 * ============================================================
 *
 * → code clean
 * → less nesting
 * → easy to read
 */

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * Guard clause = early exit pattern
 *
 * ============================================================
 */
