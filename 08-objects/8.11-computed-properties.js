/**
 * ============================================================
 * 📘 Computed Properties
 * ============================================================
 * 🧩 Computed Property → Dynamic variable/expression value used as object property name
 */

const key = "country";
const key2 = "email";
const email = "wahidhasib6@gmail.com";

/**
 * ============================================================
 * 🧩 Dynamic Property Name
 * ============================================================
 */

const user = {
  name: "Hasib",
  [key]: "Bangladesh",
  [key2]: email,
};

console.log(user);

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * Dynamic key create করতে useful
 *
 * ============================================================
 */
