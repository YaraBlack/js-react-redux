import { openModal, closeModal } from "./modal_window.js";

// Forms
const forms = document.querySelectorAll("form");
const message = {
  loading: "icons/spinner.svg",
  success: "Thank you! We will contact you soon",
  failure: "Something went wrong",
};

forms.forEach((item) => {
  bindPostData(item);
});

// async/await - use async before a function, use await before asynchronized code to wait for the result
const postData = async (url, data) => {
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });

  return await result.json();
};

function bindPostData(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const statusMessage = document.createElement("img");
    statusMessage.src = message.loading;
    statusMessage.style.cssText = `
    display: block;
    margin: 0 auto;
    `;

    form.insertAdjacentElement("afterend", statusMessage);

    // the input's property "name" is required!
    const formData = new FormData(form);

    // Transform FormData into Object
    // const object = {};
    // formData.forEach((value, key) => {
    //   object[key] = value;
    // });
    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    postData("http://localhost:3000/requests", json)
      .then((data) => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      })
      .catch(() => {
        showThanksModal(message.failure);
      })
      .finally(() => {
        form.reset();
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

export const getResource = async (url) => {
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Can't fetch ${url}, status: ${result.status}`);
  }

  return await result.json();
};

// fetch("http://localhost:3000/menu")
//   .then((data) => data.json())
//   .then((result) => console.log(result));

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "Post",
//   body: JSON.stringify({ name: "Alex" }),
//   headers: {
//     "Content-type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
