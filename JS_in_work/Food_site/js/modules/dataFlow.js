import { openModal, closeModal } from "./modal_window.js";

// Forms
const forms = document.querySelectorAll("form");
const message = {
  loading: "icons/spinner.svg",
  success: "Thank you! We will contact you soon",
  failure: "Something went wrong",
};

forms.forEach((item) => {
  postData(item);
});

function postData(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const statusMessage = document.createElement("img");
    statusMessage.src = message.loading;
    statusMessage.style.cssText = `
    display: block;
    margin: 0 auto;
    `;

    form.insertAdjacentElement("afterend", statusMessage);

    const request = new XMLHttpRequest();
    request.open("POST", "js/server.php");

    // If using fomr-data then setRequestHeader isn't required
    request.setRequestHeader("Content-type", "application/json");

    // the input's property "name" is required!
    const formData = new FormData(form);

    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    const json = JSON.stringify(object);

    // request.send(formData);
    request.send(json);
    request.addEventListener("load", () => {
      if (request.status === 200) {
        console.log(request.response);
        showThanksModal(message.success);
        form.reset();
        statusMessage.remove();
      } else {
        showThanksModal(message.failure);
      }
    });
  });
}

function showThanksModal(message) {
  const prevModalDialog = document.querySelector(".modal__dialog");

  prevModalDialog.classList.add("hide");
  openModal();

  const thanksModal = document.createElement("div");
  thanksModal.classList.add("modal__dialog");
  thanksModal.innerHTML = `
  <div class = "modal__content">
    <div class = "modal__close" data-close>×</div>
    <div class = "modal__title">${message}</div>
  </div>
  `;

  document.querySelector(".modal").append(thanksModal);

  setTimeout(() => {
    thanksModal.remove();
    prevModalDialog.classList.add("show");
    prevModalDialog.classList.remove("hide");
    closeModal();
  }, 4000);
}
