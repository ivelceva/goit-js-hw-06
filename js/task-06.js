const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", validateInputLength);

function validateInputLength() {

      let inputLength = textInput.value.length;
      let requiredLength = textInput.getAttribute("data-length");
     

    if (inputLength > requiredLength || inputLength < requiredLength) {
      textInput.classList.remove("valid");
      textInput.classList.add("invalid");
    } else {
      textInput.classList.remove("invalid");
      textInput.classList.add("valid");
     
    }
}



  










