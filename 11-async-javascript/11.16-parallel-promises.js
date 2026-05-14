/**
 * ============================================================
 * 📘 Parallel Promises
 * ============================================================
 */

async function loadAllData() {
  const users = fetch("https://jsonplaceholder.typicode.com/users");

  const posts = fetch("https://jsonplaceholder.typicode.com/posts");

  const comments = fetch("https://jsonplaceholder.typicode.com/comments");

  /**
   * ========================================================
   * 🧩 Parallel Execution
   * ========================================================
   */

  const result = await Promise.all([users, posts, comments]);

  console.log(result);
}

loadAllData();

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * Parallel execution:
 * → performance improve করে
 *
 * ============================================================
 */
