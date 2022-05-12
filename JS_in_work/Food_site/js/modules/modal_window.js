const modalBtns = document.querySelectorAll("button[data-modal]"),
  modalWindow = document.querySelector(".modal");

export function openModal() {
  modalWindow.classList.add("show");
  // disable scrolling on the site
  document.body.style.overflow = "hidden";

  clearInterval(modalTimerId);
}

export function closeModal() {
  modalWindow.classList.remove("show");
  document.body.style.overflow = "";
}

modalBtns.forEach((item) => {
  item.addEventListener("click", () => {
    openModal();
  });
});

modalWindow.addEventListener("click", (e) => {
  if (e.target === modalWindow || e.target.getAttribute("data-close") == "") {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modalWindow.classList.contains("show")) {
    closeModal();
  }
});

const modalTimerId = setTimeout(openModal, 50000);

function showModalByScroll() {
  if (
    window.pageYOffset + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight
  ) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);
