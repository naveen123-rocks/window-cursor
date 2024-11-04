let body = document.querySelector("body");

body.addEventListener("mousemove", (item) => {
  let xside = item.offsetX;
  let yside = item.offsetY;
  const span = document.createElement("span");
  body.appendChild(span);

  span.style.left = xside + "px";
  span.style.top = yside + "px";

  const size = Math.random() * 50;
  span.style.width = size + "px";
  span.style.height = size + "px";
  setTimeout(() => {
    span.remove();

  }, 3000);
});
