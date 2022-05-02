const p = document.querySelectorAll("p");
console.log(p);

// Load script dynamically

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  // async = true by default
  script.async = false;
  document.body.append(script);
}

loadScript("JS/test.js");
loadScript("JS/someJS.js");
