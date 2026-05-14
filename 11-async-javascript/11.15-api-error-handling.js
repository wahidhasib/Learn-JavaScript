/**
 * ============================================================
 * 📘 API Error Handling
 * ============================================================
 */

async function getUser() {
  try {
    const response = await fetch("https://invalid-api-url.com");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("API Error:", error);
  }
}

getUser();

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * API error properly handle করা উচিত
 *
 * ============================================================
 */
