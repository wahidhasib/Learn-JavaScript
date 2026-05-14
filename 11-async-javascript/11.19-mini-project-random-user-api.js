/**
 * ============================================================
 * 📘 Mini Project: Random User API
 * ============================================================
 */

const button = document.getElementById("btn");

const output = document.getElementById("output");

/**
 * ============================================================
 * 🧩 Load Random User
 * ============================================================
 */

button.addEventListener("click", async function () {
  const response = await fetch("https://randomuser.me/api/");

  const data = await response.json();

  const user = data.results[0];

  output.innerHTML = `
        <h3>${user.name.first}</h3>
        <img style="height: 80px; width: 80px; border-radius: 50%" src="${user.picture.medium}" />
        <div>${user.gender}</div>
    `;
});

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * API data dynamically UI তে show করা যায়
 *
 * ============================================================
 */
