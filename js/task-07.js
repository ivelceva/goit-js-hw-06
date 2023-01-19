let input = document.querySelector("#font-size-control");
let text = document.querySelector("#text");
input.addEventListener("input", updateInput);

function updateInput() {
  text.style.fontSize = input.value + "px";
};




