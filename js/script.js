const menu = document.querySelector(".header-menu");
const close_menu = document.querySelector(".close-menu");
const navigation = document.querySelector("nav");
const header = document.querySelector("header");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  navigation.classList.toggle("open-nav");
});

close_menu.addEventListener("click", (e) => {
  e.preventDefault();
  navigation.classList.toggle("open-nav");
});

const stickyMenu = function (entries) {
  if (!entries[0].isIntersecting) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyMenu, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);
