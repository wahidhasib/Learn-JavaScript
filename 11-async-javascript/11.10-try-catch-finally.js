/**
 * ============================================================
 * 📘 try...catch...finally
 * ============================================================
 */

async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Request Completed");
  }
}

getUser();

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * try/catch:
 * → async error handle করে
 *
 * ============================================================
 */
