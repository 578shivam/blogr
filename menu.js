const menuIcon = document.getElementById("menu");
const closeIcon = document.getElementById("close");
const linkMenu = document.querySelector(".link ul");
const signButtons = document.querySelector(".sign");

menuIcon.addEventListener("click", function() {
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
  linkMenu.style.display = "block";
  signButtons.style.display = "flex";
});

closeIcon.addEventListener("click", function() {
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
  linkMenu.style.display = "none";
  signButtons.style.display = "none";
});
