/**
 * ============================================================
 * 📘 Event Bubbling
 * ============================================================
 */

document.querySelector(".container").addEventListener("click", function () {
  console.log("Container Clicked");
});

document.getElementById("btn").addEventListener("click", function (event) {
  console.log("Button Clicked");

  // event.stopPropagation();
});

/**
 * ============================================================
 * 🧠 Event Flow
 * ============================================================
 *
 * Child → Parent
 */

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * Event bubbling:
 * → event parent এ propagate করে
 *
 * ============================================================
 */
