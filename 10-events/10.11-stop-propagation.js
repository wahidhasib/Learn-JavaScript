/**
 * ============================================================
 * 📘 stopPropagation()
 * ============================================================
 */

document.querySelector(".container").addEventListener("click", function () {
  console.log("Container Clicked");
  this.style.border = "2px solid red";
});

document.getElementById("btn").addEventListener("click", function (event) {
  //   event.stopPropagation(); // stop parent event

  this.style.background = "#262626";
  this.style.color = "#fff";

  console.log("Button Clicked");
});

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * stopPropagation():
 * → parent এ event যাওয়া বন্ধ করে
 *
 * ============================================================
 */
