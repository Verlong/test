const pagination = document.querySelector("ul");
const allPage = document.querySelectorAll("[data-page]");
const listActive = pagination.querySelectorAll(".active");
let currentPage = 1;
pagination.addEventListener("click", (e) => {
  const type = e.target.dataset.type;
  switch (type) {
    case "page":
      handleClick(e);
      break;

    case "next":
      handleNext();
      break;

    case "prev":
      handlePrev();
      break;

    default:
      break;
  }
});

function handleNext() {
  if (allPage.length <= currentPage) return;
  currentPage += 1;
  updateActivePage();
}

function handlePrev() {
  if (currentPage <= 1) return;
  currentPage -= 1;
  updateActivePage();
}

function handleClick(e) {
  currentPage = +e.target.dataset.page;
  updateActivePage();
}

function updateActivePage() {
  const listActive = pagination.querySelectorAll(".active");
  listActive.forEach((activeEl) => activeEl.classList.remove("active"));
  const page = document.querySelector(`[data-page='${currentPage}']`);

  page.classList.add("active");
}
