/**
 * ============================================================
 * 📘 Optional Chaining
 * ============================================================
 *
 * Nested property safely access করতে use হয়
 */

const user = {
  profile: {
    name: "Hasib",
  },
};

console.log(user.profile?.name);

// get type error
// console.log(user.address.city);

// To prevent this type error we should use Optional Chaining
console.log(user.address?.city); // output: undefined

/**
 * ============================================================
 * ⚠️ IMPORTANT
 * ============================================================
 *
 * Missing property হলেও error দিবে না
 */

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * ?. safer property access দেয়
 *
 * ============================================================
 */
