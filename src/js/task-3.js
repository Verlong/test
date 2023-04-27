// // 3. При кліку на певну дату у календарі,
// вішай клас active на обрану дату.
// Якщо раптом захотілось обрати іншу дату, не проблема,
//     просто видали всі вже існуючі класи active зі сторінки і
//      додай новий клас active на нову дату.
// // Використовуй html з файлу calendar.html.

const table = document.querySelector(".calendar");
table.addEventListener("click", handleClick);
function handleClick(e) {
  if (e.target.nodeName === "TD") {
    const activeClass = table.querySelectorAll(".active");
    activeClass.forEach((activeEl) => activeEl.classList.remove("active"));
    e.target.classList.add("active");
  }
}
