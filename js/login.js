function redirectToHome() {
  window.location.href = "index.html";
}

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// //------------------------------------------------------------------

// login.js

function redirectToHome() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");

  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    // Basic validation
    if (name && email && password) {
      saveUser(name, email, password);
      alert("Account created successfully");
    } else {
      alert("Please fill in all fields");
    }
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const user = loginWithEmailAndPassword(email, password);
    if (user) {
      currentUser = user;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      headerUser.textContent = `Welcome, ${currentUser.name || ""}`;
      alert("Login successful");
    } else {
      alert("Invalid email or password");
    }
  });

  function saveUser(name, email, password) {
    const newUser = { name, email, password };
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  }

  function loginWithEmailAndPassword(email, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    return foundUser;
  }
});
