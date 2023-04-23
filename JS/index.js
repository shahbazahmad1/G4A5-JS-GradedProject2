const LoggedIn = sessionStorage.getItem("userLoggedIn");

function checkLogin(LoggedIn, hrefUrl) {
  if (LoggedIn) {
    alert("already logged in ");
    window.location.replace(hrefUrl);
  }
}
checkLogin(LoggedIn, "./resume.html");

//Login
const userDetails = {
  username: "admin",
  password: "password",
};

localStorage.setItem("userCred", JSON.stringify(userDetails));
const getCred = JSON.parse(localStorage.getItem("userCred"));

//Password Verification
const passVer = () => {
  const user = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const LoginError = document.getElementById("loginError");
  const loginForm = document.getElementById("loginForm");

  if (user == "" && password == "") {
    LoginError.innerHTML = `<i class="fa-solid fa-circle-exclamation text-warning"></i> Username and/or Password can't be empty !!`;
  } else if (getCred["username"] == user && getCred["password"] == password) {
    sessionStorage.setItem("userLoggedIn", true);
    window.location.replace("./resume.html");
  } else {
    loginForm.reset();
    LoginError.innerHTML = `<i class="fa-solid fa-circle-exclamation text-warning"></i> Username and/or Password Incorrect !!`;
  }
};

document.getElementById("submit-btn").addEventListener("click", passVer);
