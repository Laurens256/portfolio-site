const homenav = document.querySelectorAll(".homenav");
const werknav = document.querySelectorAll(".werknav");
const contactnav = document.querySelectorAll(".contactnav");
const navItems = document.querySelectorAll(".navitems");
let currentPageNav = homenav;

// const mainElement = document.querySelector("#pagescontainer");
const homePagina = document.querySelector("#homepage");
const mijnWerkPagina = document.querySelector("#mijnwerkpage");
const contactPagina = document.querySelector("#contactpage");
let currentPage = homePagina;

const mobileNav = document.querySelector("#mobilenav");

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
        currentPage = homePagina;
        document.title = "Home";
    } else if (event.target.classList.contains("werknav")) {
        currentPageNav = werknav;
        currentPage = mijnWerkPagina;
        document.title = "Mijn werk";
    } else if (event.target.classList.contains("contactnav")){
        currentPageNav = contactnav;
        currentPage = contactPagina;
        document.title = "Contact";
    } else if (event.target.id == "hamburgernav"){
        mobileNav.classList.add("mobilenavscrolldown"); 
    }
    for (let i = 0; i < currentPageNav.length; i++) {
		currentPageNav[i].classList.add("active");
	}
    currentPage.scrollIntoView({block: "end", behavior: "smooth"});
}

function windowResize() {
    currentPage.scrollIntoView();
}

for (let i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("click", changePage);
}

window.addEventListener("resize", windowResize);