// Allows getting references to form and input fields
const form = document.getElementById("form");
const username = document.getElementById("usernameId");
const email = document.getElementById("emailId");
const password = document.getElementById("passwordId");
const confirmPassword = document.getElementById("confirmPassword");

// Allows getting references to error message elements
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// This adds blur event listeners to input fields. This will trigger validation functions
username.addEventListener("blur", validateUsername);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);

//This adds an event listener that performs an overall validation of the data entered.
form.addEventListener("submit", function (event) {
    if (
      !validateUsername() ||
      !validateEmail() ||
      !validatePassword() ||
      !validateConfirmPassword()
    ) {
      event.preventDefault();
    }
  });
  
//Function for validating username field.
function validateUsername() {
  const usernameValue = username.value.trim();

  //checks if the field is empty and displays an error message.
  if (usernameValue === "") {
    usernameError.textContent = "Field cannot be empty.";
    username.classList.remove("success");
    username.classList.add("error");
    return false;
  } else {
    usernameError.textContent = "";
    username.classList.remove("error");
    username.classList.add("success");
    return true;
  }
}

//Function for validating email field.
function validateEmail() {
  const emailValue = email.value.trim();
  //Used to validate email address format 
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  //if email field is empty, display an error message
  if (emailValue === "") {
    emailError.textContent = "Email cannot be empty.";
    email.classList.remove("success");
    email.classList.add("error");
    return false;
  } else if (!pattern.test(emailValue)) {
    emailError.textContent = "Invalid format.";
    email.classList.remove("success");
    email.classList.add("error");
    return false;
  } else {
    emailError.textContent = "";
    email.classList.remove("error");
    email.classList.add("success");
    return true;
  }
}

////Function for validating password field.
function validatePassword() {
  const passwordValue = password.value.trim();

  //Checks if password field is empty and displays an error message.
  if (passwordValue === "") {
    passwordError.textContent = "Password cannot be empty.";
    password.classList.remove("success");
    password.classList.add("error");
    return false;
  } //checks if password is too short and displays an error message.
  else if (passwordValue.length < 8) {
    passwordError.textContent = "Password must be 8 characters in length";
    password.classList.remove("success");
    password.classList.add("error");
    return false;
  } else {
    passwordError.textContent = "";
    password.classList.remove("error");
    password.classList.add("success");
    return true;
  }
}

//Function for validating confirm password field.
function validateConfirmPassword() {
  const confirmPasswordValue = confirmPassword.value.trim();

  if (confirmPasswordValue === "") {
    confirmPasswordError.textContent = "Field cannot be empty.";
    confirmPassword.classList.remove("success");
    confirmPassword.classList.add("error");
    return false;
  } //if password doesn't match show an error.
  else if (confirmPasswordValue !== password.value.trim()) {
    confirmPasswordError.textContent = "Passwords do not Match";
    confirmPassword.classList.remove("success");
    confirmPassword.classList.add("error");
    return false;
  } else {
    confirmPasswordError.textContent = "";
    confirmPassword.classList.remove("error");
    confirmPassword.classList.add("success");
    return true;
  }
}