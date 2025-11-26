const regForm = document.getElementById("regForm");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

regForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  if (!email || !password) {
    alert("Email ve şifre boş bırakılamaz.");
    return;
  }
  const user = {
    name,
    surname,
    email,
    password,
  };
  localStorage.setItem("currentUser", JSON.stringify(user));
  alert("Kayıt başarılı!Giriş sayfasına yönlendiriliyorsunuz");
  window.location.href = "login.html";
});
