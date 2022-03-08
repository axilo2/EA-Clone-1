const mediaQuery = window.matchMedia('(max-width: 1020px)')
const sideicon = document.querySelector("#sideicon")
let sidebarmobile = document.querySelector('#sidebarMobile')
function changeSideIcon() {
    if (window.innerWidth < 1020) {
        sideicon.src = "assets/icons/icons8-menu-24.png"
    }
    else {
        sideicon.src = "assets/icons/more_icon.png"
    }
}

function sidebarvisibility() {
    if (sidebarmobile.style.visibility === "hidden")
        sidebarmobile.style.visibility = "visible"
    else {
        sidebarmobile.style.visibility = "hidden"
    }
}
function changenavbar() {
    if (window.innerWidth < 1020) {
        sideicon.removeAttribute("onclick")
        sideicon.addEventListener("click", sidebarvisibility)

    }
    else {
        sideicon.removeEventListener("click", sidebarvisibility)
        sidebarmobile.style.visibility = "hidden"
        sideicon.setAttribute("onclick", "showside()")
    }
}

mediaQuery.addEventListener("change", changeSideIcon)
mediaQuery.addEventListener("change", changenavbar)




function showside() {
    let body = document.querySelector("body")
    let homepage = document.getElementById("homepage")
    let sidebar = document.getElementById("sidebar")
    if (sidebar.style.visibility === "collapse") {
        sidebar.style.visibility = "visible"
        homepage.style.filter = "brightness(50%)"
        body.style.overflowY = "hidden"

    } else {
        sidebar.style.visibility = "collapse"
        homepage.style.filter = ""
        homepage.style.overflowY = "hidden"
        body.style.overflowY = "scroll"
    }
}
function showMenu() {
    let menuOne = document.getElementById("blackbar-menu-one");
    let menuTwo = document.getElementById("blackbar-menu-two");
    if (menuOne.style.visibility === "collapse") {

        menuOne.style.visibility = "visible";
        menuOne.style.zIndex = "2"
        menuTwo.style.visibility = "collapse"

    } else {
        menuOne.style.visibility = "collapse";
    }
}


function showOtherMenu() {
    let menuOne = document.getElementById("blackbar-menu-one");
    let menuTwo = document.getElementById("blackbar-menu-two");
    if (menuTwo.style.visibility === "collapse") {
        menuTwo.style.visibility = "visible";
        menuTwo.style.zIndex = "2"
        menuOne.style.visibility = "collapse"

    } else {
        menuTwo.style.visibility = "collapse";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.sidebar .nav-link').forEach(function (element) {

        element.addEventListener('click', function (e) {

            let nextEl = element.nextElementSibling;
            let parentEl = element.parentElement;

            if (nextEl) {
                e.preventDefault();
                let mycollapse = new bootstrap.Collapse(nextEl);

                if (nextEl.classList.contains('show')) {
                    mycollapse.hide();
                } else {
                    mycollapse.show();
                    // find other submenus with class=show
                    var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                    // if it exists, then close all of them
                    if (opened_submenu) {
                        new bootstrap.Collapse(opened_submenu);
                    }
                }
            }
        }); // addEventListener
    }) // forEach
});
    // DOMContentLoaded  end

