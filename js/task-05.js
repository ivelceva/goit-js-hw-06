const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", updateInput);

function updateInput() {
    let name = input.value.trim();

  if (name !== ""){
    
    output.textContent = name;
    
  }
  name = "Anonymous";
};











