/**
 * ============================================================
 * 📘 JavaScript Variables
 * ============================================================
 *
 * এই ফাইলটি থেকে আপনি শিখবেন:
 * 1. Variable কী
 * 2. var, let, const
 * 3. Difference between them
 * 4. Best practice
 *
 * ============================================================
 * 🧩 1. Variable কী?
 * ============================================================
 *
 * Variable হলো:
 * → data store করার container
 *
 * Example:
 * → user name
 * → age
 * → email
 */

/**
 * ============================================================
 * 🧩 2. var
 * ============================================================
 *
 * পুরোনো JavaScript variable keyword
 */

var name = "Hasib";

console.log(name); // output Hasib

/**
 * ⚠️ Problem with var
 *
 * - Re-declare করা যায়
 * - Scope issue আছে
 */

var name = "Rakib";

console.log(name); // output Rakib

/**
 * ============================================================
 * 🧩 3. let
 * ============================================================
 *
 * Modern JavaScript variable keyword
 */

let age = 25;

console.log(age);

/**
 * ✅ let এর value change করা যায়
 */

age = 30;

console.log(age);

/**
 * ❌ Re-declare করা যায় না
 */

// let age = 50;

/**
 * ============================================================
 * 🧩 4. const
 * ============================================================
 *
 * Constant variable
 */

const country = "Bangladesh";

console.log(country);

/**
 * ❌ const এর value change করা যায় না
 */

// country = "Japan";

/**
 * ============================================================
 * 🎯 BEST PRACTICE
 * ============================================================
 *
 * Use:
 * → const by default
 *
 * Use let:
 * → যখন value change হবে
 *
 * Avoid:
 * → var
 */

/**
 * ============================================================
 * 🧠 REAL-LIFE ANALOGY
 * ============================================================
 *
 * const = Permanent Marker
 * let   = Pencil
 * var   = Old broken pencil
 *
 */

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * - Variables data store করে
 * - let & const modern JavaScript এ use হয়
 * - const বেশি use করা ভালো
 *
 * ============================================================
 */
