//paginas
const homenav = document.querySelectorAll(".homenav");
const werknav = document.querySelectorAll(".werknav");
const contactnav = document.querySelectorAll(".contactnav");

//mobile nav
const navItems = document.querySelectorAll(".navitems");
const navToggleButtons = document.querySelectorAll(".togglemobilenav");
const darkModeToggle = document.querySelectorAll(".lightmodetoggle");


let currentPageNav = homenav;

const mijnWerkPopupButton = document.querySelectorAll(".meerinfo");

const mainElement = document.querySelector("main");
const sectionElement = document.querySelectorAll("section");
const sectionChildren = document.querySelectorAll("main section a[href], button, input");
// const homePagina = document.querySelector("#homepage");
// const mijnWerkPagina = document.querySelector("#mijnwerkpage");
// const contactPagina = document.querySelector("#contactpage");

const bodyElement = document.querySelector("body");

const rootElement = document.querySelector(":root");
let currentTheme = localStorage.getItem("currentTheme");

//highlight tabbed element voor testing
// document.addEventListener('focus', function() {
//     console.log('focused: ', document.activeElement)
// }, true);


function toggleMobileNav() {
    bodyElement.classList.toggle("activenav");
}

//zorgt ervoor dat mobile nav verwdijnt als je van klein naar groot scherm gaat terwijl het menu open is
function screenSizeSwitch() {
    if (window.matchMedia('(min-width: 767px)').matches) {
        bodyElement.classList.remove("activenav");
    }
}

//mijn werk page popup
function mijnWerkPopup() {
    console.log("ja");
}

//change pages + active style
function changePage(event) {
    const scrollWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    //haalt active class weg van alle elementen
	for (let i=0; i<currentPageNav.length; i++) {
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

    //voegt active state toe aan nodige elementen (underline)
    for (let i = 0; i < currentPageNav.length; i++) {
		currentPageNav[i].classList.add("active");
	}

    //scrollt de pagina terug naar boven
    if (!event.target.classList.contains("noscrollreset")) {
    for (let i = 0; i < sectionElement.length; i++) {
		sectionElement[i].scrollTo(0, 0);
    }
    }
}



//navigatie met tab + tabindex correctie
function tabNav(event) {
	for (let i=0; i<currentPageNav.length; i++) {
		currentPageNav[i].classList.remove("active");
	}
    // keycode tab is 9
    if (event.keyCode == 9) {
        const activeElementParent = document.activeElement.closest("section");
        if(activeElementParent == homepage) {
            currentPageNav = homenav;
        }   else if(activeElementParent == mijnwerkpage) {
            currentPageNav = werknav;
        }   else if(activeElementParent == contactpage) {
            currentPageNav = contactnav;
        }
        
        // updateScreen(currentPageNav);
    }
        for (let i = 0; i < currentPageNav.length; i++) {
        currentPageNav[i].classList.add("active");
    }
    //wanneer element van volgende "pagina" tabbed is, verander active pagina
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

    if (event.target.tagName == "BUTTON" || event.target.tagName == "SPAN") {   //fysieke togglebutton
        rootElement.classList.toggle("lightmode");
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {    //kijkt naar systeemvoorkeur alleen
        rootElement.classList.add("lightmode");
    } else {    //default fallback is dark theme
        rootElement.classList.remove("lightmode");
    }
    
    //localstorage voor volgende keer dat de pagina wordt bezocht
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
	navToggleButtons[i].addEventListener("click", toggleMobileNav);
}
window.addEventListener("resize", screenSizeSwitch);

document.addEventListener("keyup", tabNav);

window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", toggleDarkMode);
for(let i=0; i<darkModeToggle.length; i++) {
    darkModeToggle[i].addEventListener("click", toggleDarkMode);
}

for (let i = 0; i < mijnWerkPopupButton.length; i++) {
	mijnWerkPopupButton[i].addEventListener("click", mijnWerkPopup);
}