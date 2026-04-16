$(function () {

  const header = $("header");

  $(".gnb").mouseenter(function () {
    header.addClass("on");
  });

  header.mouseleave(function () {
    header.removeClass("on");
  });

  $(".lang > a").click(function (e) {
    e.preventDefault();
    $(".lang").toggleClass("active");

  });

});
$(window).on("load", function () {

  const hash = window.location.hash.replace("#", "");

  if (hash) {

    const target = $(`.tab li[data-filter="${hash}"]`);

    if (target.length) {
      target.click();
    }
  }
});

$(window).on("hashchange", function () {

  const hash = window.location.hash.replace("#", "");

  if (hash) {

    const target = $(`.tab li[data-filter="${hash}"]`);

    if (target.length) {
      target.click();
    }
  }
});


const buttons = document.querySelectorAll(".color button[data-theme]");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.body.classList.add(savedTheme);
} else {
  document.body.classList.add("light");
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const theme = button.dataset.theme;

    document.body.classList.remove("light", "dark", "mix");
    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);
  });
});



const bgm = document.getElementById("bgm");
const bgmButton = document.querySelector(".bgm-btn");

// 저장된 상태
let savedBgm = localStorage.getItem("bgm");
let savedTime = localStorage.getItem("bgmTime");

if (savedTime) {
  bgm.currentTime = savedTime;
}

if (savedBgm === "on") {
  bgm.play().catch(() => { });
}

bgm.addEventListener("timeupdate", () => {
  localStorage.setItem("bgmTime", bgm.currentTime);
});

// BGM 버튼
bgmButton.addEventListener("click", () => {

  if (bgm.paused) {
    bgm.play();
    localStorage.setItem("bgm", "on");
  } else {
    bgm.pause();
    localStorage.setItem("bgm", "off");
  }

});

/* 모바일 메뉴 */
const mobileMenuBtn = document.querySelector(".mobile-menu");
const gnb = document.querySelector(".gnb");
const gnbItems = document.querySelectorAll(".gnb > li");

if (mobileMenuBtn && gnb) {
  mobileMenuBtn.addEventListener("click", () => {
    gnb.classList.toggle("active");
    document.body.classList.toggle("modal-open");
  });
}

/* gnbItems.forEach((item) => {
  const link = item.querySelector(":scope > a");
  const depth = item.querySelector(".depth");

  if (link && depth) {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 430) {
        e.preventDefault();
        item.classList.toggle("active");
      }
    });
  }
}); */

