/**
 * ============================================================
 * 📘 async / await
 * ============================================================
 */

/**
 * ============================================================
 * 🧩 Async Function
 * ============================================================
 */

const demoData = [
  {
    name: "Hasib",
    phone: "+880*******",
    address: "Dhaka",
  },
  {
    name: "Wahid",
    phone: "+880*******",
    address: "Rajbari",
  },
];

async function getData() {
  return demoData;
}

/**
 * ============================================================
 * 📘 Async Function with await
 * ============================================================
 *
 * async function:
 * - এই function asynchronous ভাবে কাজ করে।
 * - এটি সবসময় একটি Promise return করে।
 *
 * await keyword:
 * - await শুধু async function এর ভিতরে ব্যবহার করা যায়।
 * - এটি Promise resolve হওয়া পর্যন্ত অপেক্ষা করে।
 * - Promise থেকে পাওয়া final result variable এর মধ্যে store করে।
 *
 * Flow:
 * 1. loadData() function call হয়
 * 2. getData() execute হয়
 * 3. await Promise complete হওয়া পর্যন্ত wait করে
 * 4. result এর মধ্যে data store হয়
 * 5. console এ data print হয়
 */

async function loadData() {
  const result = await getData();

  console.table(result);
}

loadData();

/**
 * ============================================================
 * 🎯 SUMMARY
 * ============================================================
 *
 * async/await:
 * → promise handle সহজ করে
 *
 * ============================================================
 */
