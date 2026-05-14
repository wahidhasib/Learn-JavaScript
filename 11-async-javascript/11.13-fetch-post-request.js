/**
 * ============================================================
 * 📘 POST Request
 * ============================================================
 */

async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      title: "PHP",
      body: "Learning PHP language",
    }),
  });

  const data = await response.json();

  console.log(data);
}

createPost();

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * POST:
 * → server এ data পাঠায়
 *
 * ============================================================
 */
