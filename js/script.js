const menu = document.querySelector(".header-menu");
const close_menu = document.querySelector(".close-menu");
const navigation = document.querySelector("nav");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  navigation.classList.toggle("open-nav");
});

close_menu.addEventListener("click", (e) => {
  e.preventDefault();
  navigation.classList.toggle("open-nav");
});
