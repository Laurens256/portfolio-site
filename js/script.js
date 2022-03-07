const bodyElement = document.querySelector("body");

const h1Letters = document.querySelectorAll(".index section:first-of-type h1 span");

const hamburgerToggle = document.querySelector("header nav button");

const toggleNav = () => {
  bodyElement.classList.toggle("openhamburger");

  if (bodyElement.classList.contains("openhamburger") && window.matchMedia("(max-width: 768px)").matches) {
    bodyElement.style.overflowY = "hidden";
  } else {
    bodyElement.style.overflowY = "auto";
  }
};

//spring animatie voor h1
for (let i = 0; i < h1Letters.length; i++) {
  h1Letters[i].addEventListener("animationend", function () {
    h1Letters[i].classList.remove("dance");
  });

  h1Letters[i].addEventListener("mouseover", function () {
    h1Letters[i].classList.add("dance");
  });
}

hamburgerToggle.addEventListener("click", toggleNav);
