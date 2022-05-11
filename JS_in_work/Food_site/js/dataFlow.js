// Forms
const forms = document.querySelectorAll("form");
const message = {
  loading: "Loading",
  success: "We will contact you soon!",
  failure: "Something went wrong",
};

forms.forEach((item) => {
  postData(item);
});

function postData(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const statusMessage = document.createElement("div");
    statusMessage.classList.add("status");
    statusMessage.textContent = message.loading;
    form.append(statusMessage);

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
        statusMessage.textContent = message.success;
        form.reset();
        setTimeout(() => {
          statusMessage.remove();
        }, 2000);
      } else {
        statusMessage.textContent = message.failure;
      }
    });
  });
}
