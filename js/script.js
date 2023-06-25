const menu = document.querySelector(".header-menu");
const close_menu = document.querySelector(".close-menu");
const navigation = document.querySelector("nav");
const header = document.querySelector("header");
const bid = document.querySelectorAll(".current-price span");
const counter = document.querySelectorAll(".counter");

// ==========================================================================
// =========          Functions         ==========
// ==========================================================================
const timeFormat = function (time) {
  return time < 10 ? `0${time}` : `${time}`;
};

const updateHours = function (el, time) {
  const hours = el.querySelector(".hours");
  hours.textContent = timeFormat(time);
};

const updateMinutes = function (el, time) {
  const minutes = el.querySelector(".minutes");
  minutes.textContent = timeFormat(time);
};

const updateSeconds = function (el, time) {
  const seconds = el.querySelector(".seconds");
  seconds.textContent = timeFormat(time);
};

const updateTimer = function (el, time, field) {
  if (field == "hours") updateHours(el, time);
  if (field == "minutes") updateMinutes(el, time);
  if (field == "seconds") updateSeconds(el, time);
};

function getRandomValue(min, max) {
  var decimalPlaces = 2;
  var random = Math.random() * (max - min) + min;
  var factor = Math.pow(10, decimalPlaces);
  return Math.round(random * factor) / factor;
}

const updateBid = function (el, min, max) {
  setInterval(() => {
    el.textContent = getRandomValue(min, max);
  }, 10000);
};

// ==========================================================================
// =========          End Funtions         ==========
// ==========================================================================

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

counter.forEach((el) => {
  let hours = +el.querySelector(".hours").textContent;
  let minutes = +el.querySelector(".minutes").textContent;
  let second = +el.querySelector(".seconds").textContent;

  setInterval(() => {
    if (!second) {
      if (minutes > 0) {
        minutes--;
        updateTimer(el, minutes, "minutes");
        second = 59;
        updateTimer(el, second, "seconds");
      } else if (minutes <= 0 && hours > 0) {
        hours--;
        updateTimer(el, hours, "hours");
        minutes = 59;
        updateTimer(el, minutes, "minutes");
        second = 59;
        updateTimer(el, second, "seconds");
      }
      return;
    }
    second--;
    updateTimer(el, second, "seconds");
  }, 1000);
});

bid.forEach((el) => {
  if (el.parentElement.classList.contains("hero-price"))
    updateBid(el, 0.15, 0.3);
  if (el.parentElement.classList.contains("card-price"))
    updateBid(el, 480, 500);
});
