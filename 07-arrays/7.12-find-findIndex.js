/**
 * ============================================================
 * 📘 find() & findIndex()
 * ============================================================
 */

const users = [
  { id: 1, name: "Hasib" },
  { id: 2, name: "Rakib" },
];

/**
 * ============================================================
 * 🧩 find()
 * ============================================================
 */

const user = users.find((user) => {
  return user.id === 2;
});

const userByFilter = users.filter((user) => {
  return user.id === 1;
});

console.log(user);
console.log(userByFilter);

/**
 * Both function are almost similar
 * the main difference is the find return single item of the array (object)
 * But filter return the output as an array
 */

/**
 * ============================================================
 * 🧩 findIndex()
 * ============================================================
 */

const index = users.findIndex((user) => {
  return user.id === 2;
});

console.log(index);

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * find:
 * → item return করে
 *
 * findIndex:
 * → index return করে
 *
 * ============================================================
 */
