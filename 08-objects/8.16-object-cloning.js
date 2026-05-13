/**
 * ============================================================
 * 📘 Object Cloning
 * ============================================================
 */

const user = {
  name: "Hasib",
  skills: ["JavaScript", "PHP"],
  address: {
    city: "Rajbari",
    full_address: {
      holding_no: 143,
      road: "Binodpur",
    },
  },
};

/**
 * ============================================================
 * 🧩 Shallow Copy
 * ============================================================
 */

const copied = { ...user };

// change the original user object also

// copied.address.city = "Dhaka";

console.log(copied);

/**
 * ============================================================
 * 🧩 Deep Copy
 * ============================================================
 */

const deepCopied = structuredClone(user);
deepCopied.address.city = "Dhaka";

console.log(deepCopied); // only change the deepCopied.address.city

console.log(user);

/**
 * ============================================================
 * ⚠️ IMPORTANT
 * ============================================================
 *
 * Spread operator nested object পুরো copy করে না
 */

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * Deep copy complex data এর জন্য important
 *
 * ============================================================
 */
