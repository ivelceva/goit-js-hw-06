const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", validateInputLength);

function validateInputLength() {

      let inputLength = textInput.value.length;
      let requiredLength = textInput.getAttribute("data-length");

    if (requiredLength > inputLength) {
      textInput.classList.remove("valid");
      textInput.classList.add("invalid");
    } else {
      textInput.classList.remove("invalid");
      textInput.classList.add("valid");
    }
}


// const textInput = document.querySelector("#validation-input");
// textInput.addEventListener("blur", validateInputLength);

// function validateInputLength() {
//   if (this.getAttribute("data-length") > this.value.length) {
//     this.classList.remove("valid");
//     this.classList.add("invalid");
//   } else {
//     this.classList.remove("invalid");
//     this.classList.add("valid");
//   }
// }











