const profileEmail = document.getElementById("profileEmail");
const profileName = document.getElementById("profileName");
const profileSurname = document.getElementById("profileSurname");
const logoutBtn = document.getElementById("logoutBtn");
const deleteBtn = document.getElementById("deleteBtn");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser) {
  alert("Lütfen giriş yapın!");
  window.location.href = "login.html";
} else {
  profileEmail.textContent = currentUser.email;
  profileName.textContent = currentUser.name;
  profileSurname.textContent = currentUser.surname;
}

logoutBtn.addEventListener("click", function () {
  alert("Çıkış Yapıldı!");
  window.location.href = "reg.html";
});

deleteBtn.addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  alert("Hesap Silindii!");
  window.location.href = "login.html";
});
