/**
 * ============================================================
 * 📘 Mouse Events
 * ============================================================
 */

const button = document.getElementById("btn");

/**
 * ============================================================
 * 🧩 mouseenter
 * ============================================================
 */

button.addEventListener("mouseenter", function () {
  console.log("Mouse Entered");
});

/**
 * ============================================================
 * 🧩 mouseleave
 * ============================================================
 */

button.addEventListener("mouseleave", function () {
  console.log("Mouse Left");
});

/**
 * ============================================================
 * 🧩 mousemove
 * ============================================================
 */

// document.addEventListener("mousemove", function () {
//   console.log("Mouse Moving");
// });

document.addEventListener("mousemove", (event) => {
  const positionX = document.querySelector(".x");
  const positionY = document.querySelector(".y");

  positionX.textContent = event.clientX + "px";
  positionY.textContent = event.clientY + "px";
});

// button.addEventListener("mousedown", () => {
//   alert("Mouse down event fire");
// });

button.addEventListener("mouseup", () => {
  alert("Mouse up event fired!");
});

button.addEventListener("mouseover", () => {
  alert("Mouse over event fired!");
});

// document.addEventListener("mousemove", (event) => {
//   const text = document.getElementById("text");

//   text.style.position = "absolute";
//   text.style.left = event.clientX + "px";
//   text.style.top = event.clientY + "px";
// });

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * Mouse interaction track করা যায়
 *
 * ============================================================
 */
