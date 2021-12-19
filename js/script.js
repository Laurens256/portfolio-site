//paginas
const homenav = document.querySelectorAll(".homenav");
const werknav = document.querySelectorAll(".werknav");
const contactnav = document.querySelectorAll(".contactnav");

//mobile nav
const navItems = document.querySelectorAll(".navitems");
const navToggleButtons = document.querySelectorAll(".togglemobilenav");
const darkModeToggle = document.querySelector("#mobilenav ul li:last-of-type button");


let currentPageNav = homenav;


const mainElement = document.querySelector("main");
const sectionElement = document.querySelectorAll("section");
// const homePagina = document.querySelector("#homepage");
// const mijnWerkPagina = document.querySelector("#mijnwerkpage");
// const contactPagina = document.querySelector("#contactpage");

const bodyElement = document.querySelector("body");

const rootElement = document.querySelector(":root");
let currentTheme = localStorage.getItem("currentTheme");


function toggleNav() {
    bodyElement.classList.toggle("activenav");
}

//zorgt ervoor dat mobile nav verwdijnt als je van klein naar groot scherm gaat terwijl het menu open is
function screenSizeSwitch() {
    if (window.matchMedia('(min-width: 767px)').matches) {
        bodyElement.classList.remove("activenav");
    }
}

//change pages + active style
function changePage(event) {
    const scrollWidth = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;

    //highlight actieve pagina
	for (let i = 0; i < currentPageNav.length; i++) {
		currentPageNav[i].classList.remove("active");
	}

    if (event.target.classList.contains("homenav")) {
        currentPageNav = homenav;
        mainElement.scrollTo(0, 0);
        document.title = "Home";
    } else if (event.target.classList.contains("werknav")) {
        currentPageNav = werknav;
        mainElement.scrollTo(scrollWidth, 0);
        document.title = "Mijn werk";
    } else if (event.target.classList.contains("contactnav")){
        currentPageNav = contactnav;
        mainElement.scrollTo(scrollWidth*2, 0);
        document.title = "Contact";
    } 

    for (let i = 0; i < currentPageNav.length; i++) {
		currentPageNav[i].classList.add("active");
	}

    if (!event.target.classList.contains("noscrollreset")) {
    for (let i = 0; i < sectionElement.length; i++) {
		sectionElement[i].scrollTo(0, 0);
    }
    }
}



//darkmode toggle
function toggleDarkMode(event) {
    //pagina load geeft als event undefined, alleen dan kijken naar localstorage/systeemvoorkeur
    if (event == undefined) {
        if (window.matchMedia('(prefers-color-scheme: light)').matches && currentTheme == null) {
            rootElement.classList.add("lightmode");
        } else if (currentTheme == "light") {
            rootElement.classList.add("lightmode");
        }
        return;
    }

    if (event.target.tagName == "BUTTON" || event.target.tagName == "SPAN") {
        rootElement.classList.toggle("lightmode");
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        rootElement.classList.add("lightmode");
    } else {
        rootElement.classList.remove("lightmode");
    }
    
    if (rootElement.classList.contains("lightmode")) {
        localStorage.setItem("currentTheme", "light");
    } else {
        localStorage.setItem("currentTheme", "dark");
    }
}



toggleDarkMode();

for (let i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("click", changePage);
}

for (let i = 0; i < navToggleButtons.length; i++) {
	navToggleButtons[i].addEventListener("click", toggleNav);
}
window.addEventListener('resize', screenSizeSwitch);

window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", toggleDarkMode);
darkModeToggle.addEventListener("click", toggleDarkMode);