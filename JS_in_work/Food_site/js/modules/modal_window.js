window.addEventListener("DOMContentLoaded", () => {
  const modalBtns = document.querySelectorAll("button[data-modal]"),
    modalCloseBtn = document.querySelector("div[data-close]"),
    modalWindow = document.querySelector(".modal");

  function openModal() {
    modalWindow.classList.add("show");
    // disable scrolling on the site
    document.body.style.overflow = "hidden";

    // disabled during dev
    // clearInterval(modalTimerId);
  }

  function closeModal() {
    modalWindow.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalBtns.forEach((item) => {
    item.addEventListener("click", () => {
      // modalWindow.style.display = "block";
      openModal();
    });
  });

  modalCloseBtn.addEventListener("click", () => {
    // modalWindow.style.display = "none";
    closeModal();
  });

  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modalWindow.classList.contains("show")) {
      closeModal();
    }
  });

  // disabled during dev
  // const modalTimerId = setTimeout(openModal, 5000);

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
});
