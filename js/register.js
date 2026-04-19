const form = document.getElementById("registerForm");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("passwordConfirm");

passwordInput.addEventListener("input", () => {
  if (passwordInput.value === "" && passwordConfirmInput.value === "") {
    passwordInput.style.borderColor = "";
    passwordConfirmInput.style.borderColor = "";
  } else if (passwordInput.value === passwordConfirmInput.value) {
    passwordInput.style.borderColor = "green";
    passwordConfirmInput.style.borderColor = "green";
  } else {
    passwordInput.style.borderColor = "red";
    passwordConfirmInput.style.borderColor = "red";
  }
});

passwordConfirmInput.addEventListener("input", () => {
  if (passwordInput.value === "" && passwordConfirmInput.value === "") {
    passwordInput.style.borderColor = "";
    passwordConfirmInput.style.borderColor = "";
  } else if (passwordInput.value === passwordConfirmInput.value) {
    passwordInput.style.borderColor = "green";
    passwordConfirmInput.style.borderColor = "green";
  } else {
    passwordInput.style.borderColor = "red";
    passwordConfirmInput.style.borderColor = "red";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (passwordInput.value !== passwordConfirmInput.value) {
    passwordInput.style.borderColor = "red";
    passwordConfirmInput.style.borderColor = "red";
  }
});
