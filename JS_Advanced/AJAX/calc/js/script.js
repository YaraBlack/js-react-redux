const inputUah = document.querySelector("#uah");
const inputUsd = document.querySelector("#usd");

inputUah.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  // request.open(method, url, async = true, login, pass);

  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  //   request.addEventListener("readystatechange", () => {
  //     if (request.readyState === 4 && request.status === 200) {
  //       console.log(request.response);
  //       const data = JSON.parse(request.response);
  //       inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
  //     } else {
  //       console.log("Something went wrong");
  //     }
  //   });

  request.addEventListener("load", () => {
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
    } else {
      console.log("Something went wrong");
    }
  });

  /*props: 
  status (HTTP code),
  statusText (description of the HTTP code),
  response
  responseText
  readyState (current state 0-4) 0 UNSET, 1 OPENED, 2 HEADERS_RECEIVER, 3 LOADING, 4 DONE
  */

  /*events:
  abort,
  error,
  load,
  loadend,
  loadstart,
  progress,
  readystatechange,
  timeout
   */
});
