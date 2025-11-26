const loginForm = document.querySelector(".loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) {
    alert("Kayıtlı kullanıcı bulunamadı!");
    return;
  }
  if (
    emailInput.value !== user.email ||
    passwordInput.value !== user.password
  ) {
    alert("Email veya şifre hatalı!");
    return;
  }
  alert("Giriş Başarılı!");
  window.location.href = "account.html";
});
