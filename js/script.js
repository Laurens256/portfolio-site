const homenav = document.querySelectorAll(".homenav");
const werknav = document.querySelectorAll(".werknav");
const contactnav = document.querySelectorAll(".contactnav");
const navItems = document.querySelectorAll(".navitems");
let currentPageNav = homenav;

const mainElement = document.querySelector("main");
const sectionElement = document.querySelectorAll("section");
const homePagina = document.querySelector("#homepage");
const mijnWerkPagina = document.querySelector("#mijnwerkpage");
const contactPagina = document.querySelector("#contactpage");
let currentPage = 0;

const mobileNav = document.querySelector("#mobilenav");

const bodyElement = document.querySelector("body");

//change pages + markup
function changePage(event) {
	for (let i = 0; i < currentPageNav.length; i++) {
		currentPageNav[i].classList.remove("active");
	}
    if (event.target.classList.contains("closenav")) {
        mobileNav.classList.remove("mobilenavscrolldown");
        mobileNav.classList.add("mobilenavscrollup");
        setTimeout(function() {
            mobileNav.classList.remove("mobilenavscrollup");
        }, 1000);
    }

    if  (event.target.classList.contains("homenav")) {
        currentPageNav = homenav;
        currentPage = 0;
        document.title = "Home";
    } else if (event.target.classList.contains("werknav")) {
        currentPageNav = werknav;
        currentPage = 1000;
        document.title = "Mijn werk";
    } else if (event.target.classList.contains("contactnav")){
        currentPageNav = contactnav;
        currentPage = 2000;
        document.title = "Contact";
    } else if (event.target.id == "hamburgernav"){
        mobileNav.classList.add("mobilenavscrolldown"); 
    }
    for (let i = 0; i < currentPageNav.length; i++) {
		currentPageNav[i].classList.add("active");
	}
    mainElement.scrollTo(currentPage, 0);
    for (let i = 0; i < sectionElement.length; i++) {
		sectionElement[i].scrollTo(0, 0);
    }
}

function windowResize() {
    mainElement.scrollTo({
        top: 0,
        left: currentPage,
        behavior: "auto"
      });
}

for (let i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("click", changePage);
}

window.addEventListener("resize", windowResize);