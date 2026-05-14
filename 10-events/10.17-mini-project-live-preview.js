/**
 * ============================================================
 * 📘 Mini Project: Live Preview
 * ============================================================
 */

const input = document.getElementById("username");

const title = document.getElementById("title");

/**
 * ============================================================
 * 🧩 Live Update
 * ============================================================
 */

input.addEventListener("input", function (event) {
  if (event.target.value.length > 10) {
    console.log("Max limit reached");
    event.target.value = event.target.value.slice(0, 10);
    return;
  }

  title.textContent = event.target.value;
});

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * Real-time UI update করা যায়
 *
 * ============================================================
 */
