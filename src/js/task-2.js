// 2. Використовуючи поширення подій, напиши скрипт, який при кліку по кнопці remove-button буде видаляти елемент зі списку.
// Використовуй html з файлу list.html.

const list = document.querySelector(".list");

list.addEventListener("click", closeItem);
function closeItem(event) {
  if (event.target.nodeName === "BUTTON") {
    // const item = event.target.closest("li");
    const item = event.target.parentNode;
    console.log(item);
    item.remove();
  }
}
