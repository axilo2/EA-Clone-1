function showMenu() {
    let menuOne = document.getElementById("blackbar-menu-one");
    let menuTwo = document.getElementById("blackbar-menu-two");
    if (menuOne.style.visibility === "collapse") {

        menuOne.style.visibility = "visible";
        menuTwo.style.visibility = "collapse"
    } else {
        menuOne.style.visibility = "collapse";
    }
}

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
