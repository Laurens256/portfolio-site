const homenav = document.querySelector("#homenav");
const werknav = document.querySelector("#werknav");
const contactnav = document.querySelector("#contactnav");
const navItems = document.querySelectorAll(".navitems");
let currentPageNav = homenav;

const mainElement = document.querySelector("#pagescontainer");
const homePagina = document.querySelector("#homepage");
const mijnWerkPagina = document.querySelector("#mijnwerkpage");
const contactPagina = document.querySelector("#contactpage");
let currentPage = homePagina;

//change pages + markup
function changePage(event) {
    currentPageNav.classList.remove("active");
    if  (event.target.id == "homenav") {
        currentPageNav = homenav;
        currentPage = homePagina;
        document.title = "Home";
    } else if (event.target.id == "werknav") {
        currentPageNav = werknav;
        currentPage = mijnWerkPagina;
        document.title = "Mijn werk";
    } else {
        currentPageNav = contactnav;
        currentPage = contactPagina;
        document.title = "Contact";
    }
    currentPageNav.classList.add("active");
    currentPage.scrollIntoView({block: "end", behavior: "smooth"});
}

function windowResize() {
    currentPage.scrollIntoView();
}

for (let i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("click", changePage);
}

window.addEventListener("resize", windowResize);