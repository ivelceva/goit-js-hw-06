let input = document.querySelector("#font-size-control");
let text = document.querySelector("#text");
input.addEventListener("input", updateInput);

function updateInput() {
  //input.value.set();
  text.style.fontSize = input.value + "px";
};

updateInput();





 