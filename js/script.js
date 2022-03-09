const rootElement = document.querySelector(":root");
const bodyElement = document.querySelector("body");
const hamburgerToggle = document.querySelector("header nav button");

const h1Letters = document.querySelectorAll(".index section:first-of-type h1 span");

const mijnwerkIndex = document.querySelectorAll(
	".index section:nth-of-type(4) ul:nth-of-type(2) li"
);

const darkModeToggle = document.querySelector("body > nav div button");
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

const toggleDarkMode = (event) => {
	//pagina load geeft als event undefined, alleen dan kijken naar localstorage/systeemvoorkeur
	if (event == undefined) {
		if (
			window.matchMedia("(prefers-color-scheme: dark)").matches &&
			currentTheme == null
		) {
			rootElement.classList.add("darkmode");
		} else if (currentTheme == "dark") {
			rootElement.classList.add("darkmode");
		}
		return;
	}
	if (event.target.tagName == "BUTTON" || event.target.tagName == "SPAN") {
		rootElement.classList.toggle("darkmode");
	} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		rootElement.classList.add("darkmode");
	} else {
		rootElement.classList.remove("darkmode");
	}

	if (rootElement.classList.contains("darkmode")) {
		localStorage.setItem("currentTheme", "dark");
	} else {
		localStorage.setItem("currentTheme", "light");
	}
};

toggleDarkMode();

darkModeToggle.addEventListener("click", toggleDarkMode);
hamburgerToggle.addEventListener("click", toggleNav);
