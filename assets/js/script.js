"use strict";
// FOR THE HEADER HAM BURGER
const hamMenu = document.querySelector(".hand-menu");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
});
console.log(hamMenu);

// STORING ELEMENTS INTO VARIABLE
const nameInput = document.querySelector(".input-name");
const emailInput = document.querySelector(".input-email");
const inputMsg = document.querySelector(".input-message");

const btnSubmit = document.querySelector(".btn-submit");
const errorText = document.querySelectorAll(".error");
// DESTRUCTURING THE ERROR TEXT ARRAY
const [errorName, errorEmail, errorMsg] = errorText;
console.log(errorName);

btnSubmit.addEventListener("click", function () {
  // NAME
  if (!nameInput.value) {
    // if there is no input in the name field
    errorName.classList.remove("hidden");
    nameInput.classList.add("error-border");
  } else {
    // if a name is inputed
    errorName.classList.add("hidden");
    nameInput.classList.remove("error-border");
    nameInput.value = "";
  }

  // EMAIL
  const email = emailInput.value;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/; // Regular expression for email
  if (!email) {
    // if no email is inputed
    errorEmail.classList.remove("hidden");
    emailInput.classList.add("error-border");
  } else {
    // if a value is inputed
    if (emailRegex.test(email)) {
      // if the value inputed is an email
      errorEmail.classList.add("hidden");
      emailInput.classList.remove("error-border");
      emailInput.value = "";
    } else {
      // if it is not an email
      errorEmail.textContent = "Please input a valid email";
      errorEmail.classList.remove("hidden");
      emailInput.classList.add("error-border");
    }
  }

  // MESSAGE
  if (!inputMsg.value) {
    // if no value is inputed
    errorMsg.classList.remove("hidden");
    inputMsg.classList.add("error-border");
  } else {
    // if a value is inputed
    errorMsg.classList.add("hidden");
    inputMsg.classList.remove("error-border");
    inputMsg.value = "";
  }
});
