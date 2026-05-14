/**
 * ============================================================
 * 📘 GET Request
 * ============================================================
 */

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  console.log(data);
}

getPosts();

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * GET:
 * → data retrieve করে
 *
 * ============================================================
 */
