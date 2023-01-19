const button = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.querySelector("body");
//button.addEventListener("click", getRandomHexColor);

button.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.innerText = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}







// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }



