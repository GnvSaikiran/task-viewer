document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("username-id").value;
  let password = document.getElementById("password-id").value;
  if (username === "" || password === "") {
    alert("Please fill all the fields");
  } else if (username === "admin" && password === "password") {
    window.location.href = "data.html";
  } else {
    alert("Invalid credentials");
  }
});
