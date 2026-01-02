const btn = document.getElementById("btn");

btn.onclick = function () {
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");

  if (password === "") {
    result.textContent = "Please enter a password";
    result.style.color = "red";
  }
  else if (password.length < 6) {
    result.textContent = "Weak password";
    result.style.color = "orange";
  }
  else if (password.length < 10) {
    result.textContent = "Medium password";
    result.style.color = "blue";
  }
  else {
    result.textContent = "Strong password";
    result.style.color = "green";
  }
};
