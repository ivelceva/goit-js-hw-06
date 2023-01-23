const form = document.querySelector(".login-form");
form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

const formData = new FormData();

for (let i = 0; i < form.elements.length; i++) {
    const input = form.elements[i];
    if (input.name && input.value) {
      formData[input.name] = input.value;
    }
  }
  if (Object.keys(formData).length === 2) {
    console.log(formData);
    form.reset();
  } else {
    alert("Please, fill in all the fields!");
  }
}

