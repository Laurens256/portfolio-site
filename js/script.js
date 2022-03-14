const rootElement = document.querySelector(":root");
rootElement.classList.remove("geenjs");
const bodyElement = document.querySelector("body");
const hamburgerToggle = document.querySelector("header nav button");
const navElement = document.querySelector("body > nav");

const h1Letters = document.querySelectorAll(".index section:first-of-type h1 span");
const downArrow = document.querySelector(".index section:first-of-type > svg");

const mijnwerkIndex = document.querySelectorAll(
	".index section:nth-of-type(4) ul:nth-of-type(2) li"
);

const darkModeToggle = document.querySelector("body > nav div:last-of-type");
let currentTheme = localStorage.getItem("currentTheme");

//log tabbed element (testing)
// document.addEventListener('focusin', function() {
//   console.log('focused: ', document.activeElement)
// }, true);

//nav toggle
const toggleNav = () => {
	bodyElement.classList.toggle("openhamburger");

	if (
		bodyElement.classList.contains("openhamburger") &&
		window.matchMedia("(max-width: 768px)").matches
	) {
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

const scrollDownIndex = () => {
	window.scroll(0, window.innerHeight - 100);
}

//regelt alles voor darkmode, (pageload, toggle)
//lightmode is nu de default, code van https://github.com/Laurens256/portfolio-projecten/tree/main/among%20us%20website  pakken als we naar systeemvoorkeur willen luisteren
const toggleDarkMode = (event) => {
	//pagina load geeft als event undefined, alleen dan kijken naar localstorage/systeemvoorkeur
	if (event == undefined) {
		if (currentTheme == "dark") {
			rootElement.classList.add("darkmode");
		}
		return;
	}

	//check voor linker muisklik of enter press
	if(event.keyCode == 13 || event.button == 0) {
		rootElement.classList.toggle("darkmode");
	}

	if (rootElement.classList.contains("darkmode")) {
		localStorage.setItem("currentTheme", "dark");
	} else {
		localStorage.setItem("currentTheme", "light");
	}
};

toggleDarkMode();

if(bodyElement.classList.contains("index")) {
downArrow.addEventListener("click", scrollDownIndex);
}

darkModeToggle.addEventListener("click", toggleDarkMode);
darkModeToggle.addEventListener("keyup", toggleDarkMode);
hamburgerToggle.addEventListener("click", toggleNav);